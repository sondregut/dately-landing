import { NextRequest, NextResponse } from 'next/server'
import { getAdminSupabase } from '@/lib/supabase-admin'

interface PromoCode {
  code: string
  type: string
  is_active: boolean
  max_uses: number | null
  current_uses: number
  duration_days: number | null
  expires_at: string | null
  owner: string | null
  owner_email: string | null
  created_at: string | null
}

interface Redemption {
  id: string
  code: string
  user_id: string
  redeemed_at: string | null
  promo_expires_at: string | null
  revoked_at: string | null
  // Joined from users
  display_name: string | null
  email: string | null
  is_pro: boolean
  // Joined from promo_codes
  code_owner: string | null
  code_owner_email: string | null
  code_type: string
}

// GET — fetch all promo codes + redemptions + stats
export async function GET() {
  try {
    const supabase = getAdminSupabase()

    // Fetch all promo codes
    const { data: promoCodes, error: codesError } = await supabase
      .from('promo_codes')
      .select('*')
      .order('created_at', { ascending: false })

    if (codesError) throw codesError

    // Fetch all redemptions with user info
    const { data: rawRedemptions, error: redemptionsError } = await supabase
      .from('promo_code_redemptions')
      .select('*')
      .order('redeemed_at', { ascending: false })

    if (redemptionsError) throw redemptionsError

    // Fetch user profiles for all redeemers
    const userIds = Array.from(new Set((rawRedemptions || []).map((r: { user_id: string }) => r.user_id)))
    const userProfiles = new Map<string, { display_name: string | null; email: string | null; is_pro: boolean }>()

    if (userIds.length > 0) {
      const { data: users } = await supabase
        .from('users')
        .select('id, display_name, email, is_pro')
        .in('id', userIds)

      for (const u of users || []) {
        userProfiles.set(u.id, {
          display_name: u.display_name,
          email: u.email,
          is_pro: u.is_pro ?? false,
        })
      }
    }

    // Build code lookup for owner info
    const codeLookup = new Map<string, PromoCode>()
    for (const c of promoCodes || []) {
      codeLookup.set(c.code, c)
    }

    // Build enriched redemptions
    const redemptions: Redemption[] = (rawRedemptions || []).map(r => {
      const profile = userProfiles.get(r.user_id)
      const promo = codeLookup.get(r.code)
      return {
        id: r.id,
        code: r.code,
        user_id: r.user_id,
        redeemed_at: r.redeemed_at,
        promo_expires_at: r.promo_expires_at,
        revoked_at: r.revoked_at,
        display_name: profile?.display_name ?? null,
        email: profile?.email ?? null,
        is_pro: profile?.is_pro ?? false,
        code_owner: promo?.owner ?? null,
        code_owner_email: promo?.owner_email ?? null,
        code_type: promo?.type ?? 'unknown',
      }
    })

    const activeRedemptions = redemptions.filter(r => !r.revoked_at)

    return NextResponse.json({
      promoCodes: promoCodes || [],
      redemptions,
      stats: {
        totalCodes: (promoCodes || []).length,
        codesUsed: (promoCodes || []).filter(c => c.current_uses > 0).length,
        totalRedemptions: activeRedemptions.length,
        activeProUsers: activeRedemptions.filter(r => r.is_pro).length,
      },
    })
  } catch (error) {
    console.error('Error fetching promo codes:', error)
    return NextResponse.json({ error: 'Failed to fetch promo codes' }, { status: 500 })
  }
}

// POST — create a new promo code
export async function POST(request: NextRequest) {
  try {
    const supabase = getAdminSupabase()
    const body = await request.json()

    const code = (body.code as string)?.trim().toUpperCase()
    if (!code) {
      return NextResponse.json({ error: 'Code is required' }, { status: 400 })
    }

    // Check if code already exists
    const { data: existing } = await supabase
      .from('promo_codes')
      .select('code')
      .eq('code', code)
      .single()

    if (existing) {
      return NextResponse.json({ error: 'Code already exists' }, { status: 409 })
    }

    const type = body.type || 'time_limited'
    const durationDays = type === 'time_limited' ? (body.durationDays || 30) : null

    const { error } = await supabase.from('promo_codes').insert({
      code,
      type,
      is_active: true,
      max_uses: body.maxUses ?? null,
      current_uses: 0,
      duration_days: durationDays,
      owner: body.owner || null,
      owner_email: body.ownerEmail || null,
    })

    if (error) throw error

    return NextResponse.json({ success: true, code })
  } catch (error) {
    console.error('Error creating promo code:', error)
    return NextResponse.json({ error: 'Failed to create promo code' }, { status: 500 })
  }
}

// PATCH — toggle active status
export async function PATCH(request: NextRequest) {
  try {
    const supabase = getAdminSupabase()
    const body = await request.json()

    const code = (body.code as string)?.trim().toUpperCase()
    if (!code) {
      return NextResponse.json({ error: 'Code is required' }, { status: 400 })
    }

    const updates: Record<string, unknown> = {}
    if (body.isActive !== undefined) updates.is_active = body.isActive
    if (body.maxUses !== undefined) updates.max_uses = body.maxUses
    if (body.owner !== undefined) updates.owner = body.owner
    if (body.ownerEmail !== undefined) updates.owner_email = body.ownerEmail

    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ error: 'No fields to update' }, { status: 400 })
    }

    const { error } = await supabase
      .from('promo_codes')
      .update(updates)
      .eq('code', code)

    if (error) throw error

    return NextResponse.json({ success: true, code })
  } catch (error) {
    console.error('Error updating promo code:', error)
    return NextResponse.json({ error: 'Failed to update promo code' }, { status: 500 })
  }
}

// DELETE — revoke a promo code redemption
export async function DELETE(request: NextRequest) {
  try {
    const supabase = getAdminSupabase()
    const { searchParams } = new URL(request.url)
    const code = searchParams.get('code')?.trim().toUpperCase()
    const userId = searchParams.get('userId')

    if (!code || !userId) {
      return NextResponse.json({ error: 'Code and userId are required' }, { status: 400 })
    }

    // Mark redemption as revoked
    const { error: redeemError } = await supabase
      .from('promo_code_redemptions')
      .update({ revoked_at: new Date().toISOString() })
      .eq('code', code)
      .eq('user_id', userId)

    if (redeemError) throw redeemError

    // Decrement current_uses
    const { data: promoCode } = await supabase
      .from('promo_codes')
      .select('current_uses')
      .eq('code', code)
      .single()

    if (promoCode) {
      await supabase
        .from('promo_codes')
        .update({ current_uses: Math.max(0, (promoCode.current_uses || 0) - 1) })
        .eq('code', code)
    }

    // Check if user has any other active promo redemptions
    const { data: otherRedemptions } = await supabase
      .from('promo_code_redemptions')
      .select('id')
      .eq('user_id', userId)
      .is('revoked_at', null)
      .neq('code', code)

    // If no other active promos, revoke Pro access
    if (!otherRedemptions || otherRedemptions.length === 0) {
      await supabase
        .from('users')
        .update({
          is_pro: false,
          subscription_expires_at: null,
        })
        .eq('id', userId)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error revoking promo code:', error)
    return NextResponse.json({ error: 'Failed to revoke promo code' }, { status: 500 })
  }
}
