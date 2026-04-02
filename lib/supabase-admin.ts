import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

// Server-side only Supabase client with service role (bypasses RLS)
export function getAdminSupabase() {
  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY environment variable')
  }
  return createClient(supabaseUrl, supabaseServiceKey)
}
