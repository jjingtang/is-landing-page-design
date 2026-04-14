import Link from 'next/link';

export default function Navigation() {
  return (
    <>
      <nav className="liquid-nav-wrap" aria-label="Primary">
        <div className="liquid-nav-shell">
          <span className="liquid-nav-sheen" aria-hidden="true" />
          <span className="liquid-nav-reflection" aria-hidden="true" />

          <div className="liquid-nav-links">
            <Link href="/" className="liquid-nav-link">
              Home
            </Link>
            <Link href="/about" className="liquid-nav-link">
              About
            </Link>
          </div>

          <a
            href="https://www.instagram.com/invisibleskin.co"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-nav-cta"
          >
            <span>Follow Instagram</span>
            <svg
              className="liquid-nav-cta-icon"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M5 11L11 5M6 5H11V10"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </nav>

      <style>{`
        .liquid-nav-wrap {
          position: absolute;
          top: 14px;
          left: 0;
          right: 0;
          z-index: 50;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          width: 100%;
          padding: 0 18px;
        }

        .liquid-nav-shell {
          position: relative;
          grid-column: 2 / 4;
          justify-self: center;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          width: min(calc(100vw - 36px), 700px);
          min-height: 60px;
          padding: 10px 12px 10px 24px;
          overflow: hidden;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.26);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.07) 100%),
            rgba(122, 110, 98, 0.16);
          backdrop-filter: blur(28px) saturate(1.24);
          -webkit-backdrop-filter: blur(28px) saturate(1.24);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.34),
            inset 0 -1px 0 rgba(255, 255, 255, 0.08),
            0 12px 28px rgba(46, 42, 37, 0.08);
        }

        .liquid-nav-sheen {
          position: absolute;
          inset: 1px 1px auto 1px;
          height: 46%;
          border-radius: inherit;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.03) 100%);
          pointer-events: none;
        }

        .liquid-nav-reflection {
          position: absolute;
          left: 12%;
          top: -64%;
          width: 28%;
          height: 190%;
          background:
            linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.16) 48%, transparent 100%);
          filter: blur(16px);
          opacity: 0.72;
          transform: rotate(12deg);
          pointer-events: none;
        }

        .liquid-nav-links {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 26px;
          flex-shrink: 0;
        }

        .liquid-nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          text-decoration: none;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 13px;
          font-weight: 500;
          line-height: 1;
          letter-spacing: 0.01em;
          color: transparent;
          background-image: linear-gradient(
            118deg,
            #d4621a 0%,
            #d4621a 36%,
            rgba(245, 240, 232, 0.28) 43%,
            rgba(255, 244, 213, 0.72) 48%,
            rgba(255, 249, 235, 0.9) 50%,
            rgba(255, 239, 190, 0.76) 54%,
            rgba(245, 240, 232, 0.24) 60%,
            #d4621a 100%
          );
          background-size: 280% 100%;
          background-position: 140% 0;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .liquid-nav-link:hover {
          animation: liquid-nav-text-sunbeam 2.8s ease-in-out infinite;
        }

        .liquid-nav-cta {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-shrink: 0;
          white-space: nowrap;
          padding: 12px 18px;
          border-radius: 999px;
          border: 1px solid rgba(212, 98, 26, 0.92);
          background: #d4621a;
          color: #ffffff;
          overflow: hidden;
          isolation: isolate;
          text-decoration: none;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 13px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: 0.01em;
        }

        .liquid-nav-cta::after {
          content: '';
          position: absolute;
          top: -112%;
          left: 0;
          width: 56%;
          height: 320%;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 250, 236, 0.78) 0%,
            rgba(255, 244, 214, 0.54) 24%,
            rgba(255, 233, 164, 0.28) 46%,
            rgba(245, 240, 232, 0.08) 62%,
            rgba(255, 255, 255, 0) 78%
          );
          filter: blur(10px);
          opacity: 0;
          pointer-events: none;
          transform: translateX(-170%) translateY(-8%) rotate(14deg) scaleX(0.92);
        }

        .liquid-nav-cta > span,
        .liquid-nav-cta-icon {
          position: relative;
          z-index: 1;
        }

        .liquid-nav-cta-icon {
          width: 13px;
          height: 13px;
          flex-shrink: 0;
        }

        .liquid-nav-cta:hover::after {
          animation: liquid-nav-sunfall 3.1s ease-in-out infinite;
        }

        @keyframes liquid-nav-text-sunbeam {
          0%,
          16% {
            background-position: 145% 0;
          }
          48% {
            background-position: 44% 0;
          }
          100% {
            background-position: -45% 0;
          }
        }

        @keyframes liquid-nav-sunfall {
          0% {
            opacity: 0;
            transform: translateX(-170%) translateY(-10%) rotate(14deg) scaleX(0.92);
          }
          22% {
            opacity: 0.22;
          }
          44% {
            opacity: 0.62;
          }
          70% {
            opacity: 0.28;
          }
          100% {
            opacity: 0;
            transform: translateX(255%) translateY(12%) rotate(14deg) scaleX(1.08);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .liquid-nav-link:hover,
          .liquid-nav-cta:hover::after {
            animation: none;
          }
        }

        @media (max-width: 767px) {
          .liquid-nav-wrap {
            display: flex;
            justify-content: center;
            padding: 0 12px;
          }

          .liquid-nav-shell {
            grid-column: auto;
            justify-self: auto;
            gap: 18px;
            width: min(100%, 420px);
            min-height: 56px;
            padding: 8px 10px 8px 18px;
          }

          .liquid-nav-links {
            gap: 18px;
          }

          .liquid-nav-link,
          .liquid-nav-cta {
            font-size: 12px;
          }

          .liquid-nav-cta {
            padding: 11px 16px;
          }
        }

        @media (max-width: 460px) {
          .liquid-nav-shell {
            gap: 14px;
            padding: 8px 8px 8px 14px;
          }

          .liquid-nav-links {
            gap: 14px;
          }

          .liquid-nav-link,
          .liquid-nav-cta {
            font-size: 11px;
          }

          .liquid-nav-cta {
            padding: 10px 14px;
          }
        }
      `}</style>
    </>
  )
}
