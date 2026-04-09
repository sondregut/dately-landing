import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Dately — AI-Powered Surprise Date Planner'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0F0B0A 0%, #181110 50%, #0D0908 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        {/* Decorative accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #8B3A34, #C7B28A, #8B3A34)',
          }}
        />

        {/* Brand name */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 400,
            color: '#F3EEE9',
            letterSpacing: '-0.02em',
            marginBottom: '16px',
            fontFamily: 'Georgia, serif',
          }}
        >
          Dately
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: '#CFC5BD',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.4,
            marginBottom: '40px',
          }}
        >
          AI-Powered Surprise Date Plans You Scratch to Reveal
        </div>

        {/* Feature pills */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          {['Real Venues', 'AI-Powered', 'Scratch Cards'].map((label) => (
            <div
              key={label}
              style={{
                padding: '10px 24px',
                borderRadius: '999px',
                border: '1px solid rgba(199, 178, 138, 0.3)',
                color: '#C7B28A',
                fontSize: 18,
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            fontSize: 20,
            color: '#8F857E',
            letterSpacing: '0.1em',
          }}
        >
          trydately.app
        </div>
      </div>
    ),
    { ...size }
  )
}
