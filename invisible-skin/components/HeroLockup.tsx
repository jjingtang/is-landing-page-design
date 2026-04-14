import type { CSSProperties } from 'react'

interface Props {
  wipeProgress: number
}

const layerBaseStyle: CSSProperties = {
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
}

const centerWrapStyle: CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: 'min(calc(100vw - 40px), 760px)',
  textAlign: 'center',
  transform: 'translate(-50%, calc(-50% - clamp(10px, 2vh, 26px)))',
}

const haloStyle: CSSProperties = {
  position: 'absolute',
  inset: '16% 8%',
  borderRadius: '999px',
  background:
    'radial-gradient(ellipse at center, rgba(245, 240, 232, 0.44) 0%, rgba(245, 240, 232, 0.18) 52%, transparent 76%)',
  filter: 'blur(24px)',
}

const titleStyle: CSSProperties = {
  color: '#D4621A',
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontSize: 'clamp(40px, 6vw, 74px)',
  fontWeight: 300,
  fontStyle: 'italic',
  lineHeight: 1.02,
  letterSpacing: '-0.03em',
  textShadow:
    '0 0 40px rgba(212, 98, 26, 0.18), 0 0 80px rgba(245, 240, 232, 0.10)',
}

const subtitleStyle: CSSProperties = {
  marginTop: '18px',
  color: '#7A6E62',
  fontFamily: "'Inter', system-ui, sans-serif",
  fontSize: 'clamp(14px, 1.35vw, 16px)',
  fontWeight: 400,
  lineHeight: 1.6,
  letterSpacing: '0.06em',
}

const hintTitleStyle: CSSProperties = {
  color: 'rgba(212, 98, 26, 0.18)',
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontSize: 'clamp(40px, 6vw, 74px)',
  fontWeight: 300,
  fontStyle: 'italic',
  lineHeight: 1.02,
  letterSpacing: '-0.03em',
  textShadow:
    '0 0 12px rgba(245, 240, 232, 0.12), 0 0 30px rgba(212, 98, 26, 0.05)',
}

const hintSubtitleStyle: CSSProperties = {
  marginTop: '18px',
  color: 'rgba(122, 110, 98, 0.16)',
  fontFamily: "'Inter', system-ui, sans-serif",
  fontSize: 'clamp(14px, 1.35vw, 16px)',
  fontWeight: 400,
  lineHeight: 1.6,
  letterSpacing: '0.06em',
}

const hintHaloStyle: CSSProperties = {
  ...haloStyle,
  opacity: 0.34,
  filter: 'blur(30px)',
}

export default function HeroLockup({ wipeProgress }: Props) {
  const revealOpacity = Math.min(1, wipeProgress * 20)
  const hintOpacity = Math.max(0, 1 - wipeProgress * 12)

  return (
    <>
      <div
        id="about"
        style={{
          ...layerBaseStyle,
          zIndex: 15,
          opacity: revealOpacity,
          transition: 'opacity 220ms ease',
        }}
        aria-hidden={revealOpacity <= 0.01}
      >
        <div style={centerWrapStyle}>
          <div
            style={{
              ...haloStyle,
              opacity: Math.max(0.16, revealOpacity * 0.9),
            }}
          />

          <div style={{ position: 'relative' }}>
            <h1 style={titleStyle}>INVISIBLE SKIN</h1>
            <p style={subtitleStyle}>Launching soon</p>
          </div>
        </div>
      </div>

      <div
        style={{
          ...layerBaseStyle,
          zIndex: 25,
          opacity: hintOpacity,
          transition: 'opacity 240ms ease',
        }}
        aria-hidden="true"
      >
        <div style={centerWrapStyle}>
          <div className="hero-hint-wrap" style={{ position: 'relative' }}>
            <div style={hintHaloStyle} />
            <div style={{ position: 'relative' }}>
              <h1 className="hero-edge-title" style={hintTitleStyle}>
                INVISIBLE SKIN
              </h1>
              <p style={hintSubtitleStyle}>Launching soon</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-hint-wrap {
          opacity: 0;
          animation: hero-edge-hint 5s ease-in-out infinite;
        }

        @keyframes hero-edge-hint {
          0%,
          68%,
          100% {
            opacity: 0;
            filter: blur(0.8px);
          }

          12% {
            opacity: 0.24;
            filter: blur(0.35px);
          }

          20% {
            opacity: 1;
            filter: blur(0px);
          }

          30% {
            opacity: 0.36;
            filter: blur(0.2px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-hint-wrap {
            animation: none !important;
            opacity: 0.62 !important;
          }
        }
      `}</style>
    </>
  )
}
