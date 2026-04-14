import type { CSSProperties } from 'react'

interface Props {
  wipeProgress: number
}

const MIST_BLOBS = [
  { left: '8%', top: '4%', width: '42%', height: '24%', opacity: 0.34, blur: 34, animation: 'mist-drift 22s ease-in-out infinite' },
  { left: '44%', top: '7%', width: '34%', height: '18%', opacity: 0.26, blur: 28, animation: 'mist-drift-alt 26s ease-in-out infinite' },
  { left: '62%', top: '22%', width: '26%', height: '16%', opacity: 0.2, blur: 24, animation: 'mist-drift 20s ease-in-out infinite reverse' },
  { left: '18%', top: '34%', width: '46%', height: '18%', opacity: 0.18, blur: 30, animation: 'mist-drift-alt 30s ease-in-out infinite' },
]

const DEW_SPECKS = [
  { left: '14%', top: '10%', size: 8, opacity: 0.26, delay: '0.3s' },
  { left: '28%', top: '24%', size: 7, opacity: 0.22, delay: '0.8s' },
  { left: '48%', top: '16%', size: 10, opacity: 0.24, delay: '1.8s' },
  { left: '66%', top: '28%', size: 8, opacity: 0.22, delay: '0.6s' },
  { left: '82%', top: '18%', size: 10, opacity: 0.18, delay: '0.1s' },
]

const DRIPS = [
  { left: '18%', top: '8%', height: 48, opacity: 0.28, delay: '0s', duration: '7.2s' },
  { left: '42%', top: '9%', height: 42, opacity: 0.24, delay: '1.1s', duration: '8.2s' },
  { left: '74%', top: '10%', height: 54, opacity: 0.26, delay: '0.5s', duration: '6.8s' },
]

export default function LiquidGlassLayer({ wipeProgress }: Props) {
  const layerOpacity = Math.max(0, 1 - wipeProgress * 1.12)
  const blurAmount = 14 + Math.max(0, 24 * (1 - wipeProgress * 0.72))

  return (
    <div
      className="absolute inset-0 z-10 overflow-hidden pointer-events-none"
      style={{
        opacity: layerOpacity,
        transition: 'opacity 0.2s linear',
      }}
    >
      <div
        className="mist-layer"
        style={{
          inset: 'clamp(8px, 1vw, 18px) clamp(12px, 1.4vw, 24px) auto',
          height: 'min(58vh, 520px)',
          backdropFilter: `blur(${blurAmount}px) saturate(1.02)`,
          WebkitBackdropFilter: `blur(${blurAmount}px) saturate(1.02)`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(245, 240, 232, 0.3) 0%, rgba(245, 240, 232, 0.16) 30%, rgba(237, 229, 213, 0.08) 64%, transparent 100%)',
          }}
        />

        <div
          className="absolute inset-x-[6%] top-[2%]"
          style={{
            height: '26%',
            background:
              'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.38) 0%, rgba(245, 240, 232, 0.18) 48%, transparent 78%)',
            filter: 'blur(24px)',
          }}
        />

        {MIST_BLOBS.map((blob, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: blob.left,
              top: blob.top,
              width: blob.width,
              height: blob.height,
              opacity: blob.opacity,
              animation: blob.animation,
              borderRadius: '50%',
              background:
                'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.56) 0%, rgba(245, 240, 232, 0.28) 34%, rgba(237, 229, 213, 0.12) 62%, transparent 100%)',
              filter: `blur(${blob.blur}px)`,
              mixBlendMode: 'screen',
            }}
          />
        ))}

        <div
          className="absolute inset-x-[8%]"
          style={{
            top: '44%',
            height: '18%',
            background:
              'linear-gradient(180deg, rgba(245, 240, 232, 0.02) 0%, rgba(245, 240, 232, 0.2) 38%, rgba(237, 229, 213, 0.28) 64%, transparent 100%)',
            filter: 'blur(18px)',
          }}
        />

        <div
          className="absolute inset-x-[12%]"
          style={{
            bottom: '16%',
            height: '16%',
            background:
              'radial-gradient(ellipse at center, rgba(245, 240, 232, 0.44) 0%, rgba(237, 229, 213, 0.18) 42%, transparent 78%)',
            filter: 'blur(28px)',
            animation: 'haze-breathe 16s ease-in-out infinite',
          }}
        />

        {DEW_SPECKS.map((speck, index) => (
          <span
            key={index}
            className="dew-speck"
            style={{
              left: speck.left,
              top: speck.top,
              width: speck.size,
              height: speck.size,
              opacity: speck.opacity,
              animationDelay: speck.delay,
            }}
          />
        ))}

        {DRIPS.map((drip, index) => (
          <span
            key={index}
            className="fog-drip"
            style={
              {
                left: drip.left,
                top: drip.top,
                height: `${drip.height}px`,
                opacity: drip.opacity,
                '--drip-delay': drip.delay,
                '--drip-duration': drip.duration,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div
        className="absolute inset-x-[10%] top-0"
        style={{
          height: '20%',
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(245, 240, 232, 0.14) 46%, transparent 100%)',
          filter: 'blur(34px)',
          opacity: Math.max(0.2, 0.88 - wipeProgress),
        }}
      />

      <div
        className="absolute inset-0 flex flex-col items-center justify-end"
        style={{
          paddingBottom: '8vh',
          opacity: Math.max(0, 1 - wipeProgress * 5.4),
          transition: 'opacity 0.3s ease',
        }}
      >
        <div
          style={{
            width: '1px',
            height: '34px',
            background: 'rgba(217, 206, 188, 0.72)',
            boxShadow: '0 4px 16px rgba(46, 42, 37, 0.08)',
            marginBottom: '14px',
          }}
        />
        <p
          className="font-sans text-charcoal/55"
          style={{
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          Wipe to reveal
        </p>
      </div>
    </div>
  )
}
