import Navigation from '@/components/Navigation'

const founders = [
  {
    // TODO: Replace with the first founder's real name.
    name: 'Priscilla Hon',
    role: 'Co-founder',
    image: '/imgs/profile/1.jpeg',
    alt: 'Priscilla Hon',
    // TODO: Replace this placeholder description with the real founder bio.
    description:
      'The people have spoken: she’s',
    reference: {
      href: 'https://x.com/linkamuch/status/2041985276373831774?s=20',
      label: 'the real boss of the brand',
    },
    descriptionAfter:
      '. The visionary behind the product, and the creative director of every detail.',
    align: 'left',
  },
  {
    // TODO: Replace with the second founder's real name.
    name: 'Karolína Muchová',
    role: 'Co-founder',
    image: '/imgs/profile/2.png',
    alt: 'Karolína Muchová',
    // TODO: Replace this placeholder description with the real founder bio.
    description:
      'She brings the vibe, 2 titles and a dream.',
    align: 'right',
  },
] as const

function FounderCard({
  founder,
  index,
}: {
  founder: (typeof founders)[number]
  index: number
}) {
  return (
    <article
      className="is-founder"
      data-align={founder.align}
      style={{
        animation: `is-fadein 1.1s cubic-bezier(0.22, 1, 0.36, 1) ${0.12 + index * 0.16}s both`,
      }}
    >
      <div
        className="is-founder-image"
        role="img"
        aria-label={founder.alt}
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(255, 220, 170, 0.05) 0%, rgba(245, 240, 232, 0.02) 56%, rgba(180, 130, 80, 0.06) 100%), url(${founder.image})`,
        }}
      >
        <div className="is-founder-grain" aria-hidden />
        <div className="is-founder-vignette" aria-hidden />
        <div className="is-founder-frame" aria-hidden />
      </div>

      <div className="is-founder-copy">
        <p className="is-founder-role">{founder.role}</p>
        <h2 className="is-founder-name">{founder.name}</h2>
        <p className="is-founder-description">
          {founder.description}{' '}
          {'reference' in founder ? (
            <>
              <a
                className="is-founder-link"
                href={founder.reference.href}
                target="_blank"
                rel="noreferrer"
              >
                {founder.reference.label}
              </a>
              {founder.descriptionAfter}
            </>
          ) : null}
        </p>
      </div>
    </article>
  )
}

export default function AboutPage() {
  return (
    <>
      <style>{`
        .is-page {
          position: relative;
          height: 100vh;
          overflow-x: hidden;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          background:
            linear-gradient(180deg, #f5f0e8 0%, #f5f0e8 62%, #ede5d5 100%);
          color: #2e2a25;
        }

        @supports (height: 100dvh) {
          .is-page {
            height: 100dvh;
          }
        }

        .is-grain {
          position: fixed;
          inset: 0;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.04'/%3E%3C/svg%3E");
          background-size: 180px 180px;
          mix-blend-mode: multiply;
          opacity: 0.18;
          z-index: 0;
        }

        .is-sun {
          position: fixed;
          inset: auto;
          pointer-events: none;
          border-radius: 999px;
          z-index: 0;
          filter: blur(90px);
        }

        .is-sun-a {
          top: -4%;
          right: -10%;
          width: min(48vw, 640px);
          height: min(48vw, 640px);
          background: rgba(255, 241, 205, 0.54);
        }

        .is-sun-b {
          top: 34%;
          left: -10%;
          width: min(28vw, 360px);
          height: min(28vw, 360px);
          background: rgba(212, 98, 26, 0.035);
          filter: blur(140px);
        }

        .is-shell {
          position: relative;
          z-index: 1;
          min-height: 100%;
        }

        .is-header {
          position: relative;
          height: 104px;
        }

        .is-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(20px, 5vw, 60px);
        }

        .is-stage {
          padding-top: clamp(40px, 7vh, 72px);
          padding-bottom: clamp(112px, 16vh, 200px);
        }

        .is-kicker {
          margin-bottom: clamp(40px, 6vh, 72px);
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #7a6e62;
        }

        .is-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: clamp(44px, 6vw, 92px);
          row-gap: clamp(52px, 7vw, 84px);
          align-items: start;
        }

        .is-founder {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: min(100%, 540px);
          gap: clamp(20px, 2.4vw, 28px);
        }

        .is-founder[data-align='left'] {
          justify-self: start;
        }

        .is-founder[data-align='right'] {
          justify-self: end;
        }

        .is-founder-image {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          min-height: clamp(420px, 46vw, 620px);
          border-radius: 4px;
          overflow: hidden;
          background-color: #ede5d5;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          filter: sepia(0.12) saturate(0.9) contrast(0.95) brightness(1.03);
        }

        .is-founder-grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.04'/%3E%3C/svg%3E");
          background-size: 180px 180px;
          mix-blend-mode: multiply;
          opacity: 0.35;
          pointer-events: none;
        }

        .is-founder-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at center,
            transparent 54%,
            rgba(46, 42, 37, 0.18) 100%
          );
          pointer-events: none;
        }

        .is-founder-frame {
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 0 1px rgba(46, 42, 37, 0.12);
          pointer-events: none;
        }

        .is-founder-copy {
          width: min(100%, 32rem);
          max-width: none;
          padding-top: 24px;
          border-top: 1px solid rgba(46, 42, 37, 0.1);
        }

        .is-founder[data-align='right'] .is-founder-copy {
          margin-left: 0;
        }

        .is-founder-role {
          margin-bottom: 12px;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #d4621a;
        }

        .is-founder-name {
          margin-bottom: 18px;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(28px, 3.1vw, 44px);
          font-weight: 400;
          line-height: 1.08;
          color: #2e2a25;
          white-space: nowrap;
        }

        .is-founder-description {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.8;
          color: #7a6e62;
        }

        .is-founder-link {
          color: #d4621a;
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 0.18em;
          transition:
            color 180ms ease,
            opacity 180ms ease;
        }

        .is-founder-link:hover {
          color: #ba5617;
          opacity: 0.86;
        }

        .is-footer {
          border-top: 1px solid rgba(46, 42, 37, 0.08);
          padding: 28px clamp(20px, 5vw, 60px) 40px;
        }

        .is-footer-copy {
          max-width: 720px;
          margin: 0 auto;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.6;
          color: #7a6e62;
          text-align: center;
        }

        @keyframes is-fadein {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1023px) {
          .is-grid {
            column-gap: clamp(28px, 4vw, 44px);
            row-gap: 56px;
          }
        }

        @media (max-width: 767px) {
          .is-header {
            height: 92px;
          }

          .is-stage {
            padding-top: 28px;
            padding-bottom: 88px;
          }

          .is-kicker {
            margin-bottom: 28px;
          }

          .is-grid {
            grid-template-columns: 1fr;
            gap: 64px;
          }

          .is-founder[data-align='left'],
          .is-founder[data-align='right'] {
            justify-self: stretch;
          }

          .is-founder-copy,
          .is-founder[data-align='right'] .is-founder-copy {
            max-width: 100%;
            margin-left: 0;
          }

          .is-founder-image {
            min-height: 0;
          }

          .is-founder-name {
            font-size: clamp(28px, 9vw, 40px);
            white-space: normal;
          }
        }
      `}</style>

      <main className="is-page">
        <div className="is-grain" aria-hidden />
        <div className="is-sun is-sun-a" aria-hidden />
        <div className="is-sun is-sun-b" aria-hidden />

        <div className="is-shell">
          <header className="is-header">
            <Navigation />
          </header>

          <div className="is-inner">
            <section className="is-stage" aria-label="Founders">
              <p className="is-kicker">Our Founders</p>

              <div className="is-grid">
                {founders.map((founder, index) => (
                  <FounderCard
                    key={founder.name}
                    founder={founder}
                    index={index}
                  />
                ))}
              </div>
            </section>
          </div>

          <footer className="is-footer">
            <p className="is-footer-copy">
              Declaration: This is not an official website for Invisible Skin,
              It is made by <a href="https://x.com/inntown13" className='hover:text-blue-600'>@inntown13</a> as a fan project. All information is based on publicly available sources and may not be accurate. 
              Please contact me if any rights holder believes that this content infringes their rights or may adversely affect their brand.
            </p>
          </footer>
        </div>
      </main>
    </>
  )
}
