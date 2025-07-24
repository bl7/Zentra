'use client'
import React from "react";
import SectionLabel from "../../components/SectionLabel";

export default function Features() {
  return (
    <main className="main">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-grid">
          {/* Left: Hero Text */}
          <div className="hero-left">
            <div className="hero-label">
              <SectionLabel text="FEATURES" />
              <div className="hero-title">PrintBridge Features</div>
            </div>
            <div className="hero-subheading">
              PrintBridge by Zentra is a local software solution for effortless, secure, and instant label printing from any web application. No browser dialogs, no cloud dependency, no hassle.
            </div>
          </div>
          {/* Right: Hero SVG */}
          <div className="hero-svg">
            <svg width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 1 }}>
              <g stroke="#444" strokeDasharray="4 4" opacity="0.5">
                {Array.from({ length: 7 }).map((_, i) => (
                  <line key={i} x1={60 * i} y1={0} x2={60 * i} y2={420} />
                ))}
                {Array.from({ length: 7 }).map((_, i) => (
                  <line key={i+20} x1={0} y1={60 * i} x2={420} y2={60 * i} />
                ))}
              </g>
              <rect x="60" y="60" width="300" height="180" rx="0" fill="#232323" stroke="#fff" strokeWidth="2" />
              <circle cx="80" cy="78" r="7" fill="#ea4335" />
              <circle cx="100" cy="78" r="7" fill="#fbbc04" />
              <circle cx="120" cy="78" r="7" fill="#34a853" />
              <circle cx="210" cy="150" r="32" fill="#fff" fillOpacity="0.9" />
              <polygon points="200,135 230,150 200,165" fill="#4285f4" />
              <rect x="150" y="270" width="120" height="60" rx="0" fill="#232323" stroke="#fff" strokeWidth="2" />
              <rect x="180" y="295" width="60" height="18" rx="0" fill="#fff" fillOpacity="0.18" />
              <rect x="195" y="330" width="30" height="18" rx="0" fill="#fff" fillOpacity="0.7" />
              <circle cx="340" cy="340" r="18" fill="#4285f4" fillOpacity="0.18" />
              <line x1="320" y1="100" x2="400" y2="180" stroke="#ea4335" strokeWidth="3" opacity="0.7" />
            </svg>
          </div>
        </div>
      </section>

      {/* GROUPED FEATURES SECTIONS */}
      <section className="features-section">
        <div className="container features-stack">
          {/* Supported Printers */}
          <div>
            <SectionLabel text="CORE FEATURES" />
            <ul className="usecases-list">
              <li>Native support for Mac and Windows (dedicated software for each)</li>
              <li>Runs locally—no cloud dependency, works fully offline</li>
              <li>Effortless integration via WebSocket (just send a PNG from your web app)</li>
              <li>Chrome recommended for best experience</li>
              <li>Endorsed/tested printers: Munbyn, Epson</li>
              <li>Designed for thermal label printers</li>
              <li>Not tested on non-thermal printers</li>
            </ul>
          </div>
          {/* Label Types */}
          <div className="label-types">
            <SectionLabel text="LABEL TYPES" />
            <div className="label-types-title">
              <span role="img" aria-label="label">🏷️</span> Supports All Label Types — For Any Industry
            </div>
            <div className="label-types-grid">
              {/* Card 1 */}
              <div className="label-card">
                <svg width="100%" height="160" viewBox="0 0 340 160" className="dots-svg">
                  {Array.from({ length: 8 }).map((_, i) =>
                    Array.from({ length: 4 }).map((_, j) =>
                      <circle key={i + '-' + j} cx={40 + i * 40} cy={32 + j * 32} r="2" fill="#444" />
                    )
                  )}
                </svg>
                <div className="label-icon">
                  <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="8" rx="4" fill="#4285f4"/></svg>
                </div>
                <div className="label-title">Food & Compliance Labels</div>
                <div className="label-desc">Prep, cook, expiry, allergen, and Natasha’s Law labels for kitchens and food production.</div>
              </div>
              {/* Card 2 */}
              <div className="label-card">
                <svg width="100%" height="160" viewBox="0 0 340 160" className="dots-svg">
                  {Array.from({ length: 8 }).map((_, i) =>
                    Array.from({ length: 4 }).map((_, j) =>
                      <circle key={i + '-' + j} cx={40 + i * 40} cy={32 + j * 32} r="2" fill="#444" />
                    )
                  )}
                </svg>
                <div className="label-icon">
                  <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="3" fill="#34a853"/></svg>
                </div>
                <div className="label-title">Shipping & Logistics</div>
                <div className="label-desc">Shipping, barcode, QR code, and inventory labels for warehouses and logistics.</div>
              </div>
              {/* Card 3 */}
              <div className="label-card">
                <svg width="100%" height="160" viewBox="0 0 340 160" className="dots-svg">
                  {Array.from({ length: 8 }).map((_, i) =>
                    Array.from({ length: 4 }).map((_, j) =>
                      <circle key={i + '-' + j} cx={40 + i * 40} cy={32 + j * 32} r="2" fill="#444" />
                    )
                  )}
                </svg>
                <div className="label-icon">
                  <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="2" fill="#fbbc04"/></svg>
                </div>
                <div className="label-title">Retail & Custom Labels</div>
                <div className="label-desc">Product, price, shelf, and custom-branded labels for retail and internal workflows.</div>
              </div>
            </div>
          </div>
          {/* Cross-Platform Simplicity */}
          <div className="platform-section">
            <SectionLabel text="CROSS-PLATFORM SIMPLICITY" />
            <div className="platform-grid">
              <div className="platform-left">
                <div className="platform-title">
                  <span role="img" aria-label="laptop">💻</span> Cross-Platform Simplicity
                </div>
                <div className="platform-desc">
                  Zentra is built from the ground up to work perfectly on both Mac and Windows environments — with native behavior and system-level reliability.
                </div>
                <div className="platform-buttons">
                  <button className="platform-btn">Download for macOS</button>
                  <button className="platform-btn">Download for Windows</button>
                </div>
              </div>
              <div className="platform-card">
                <div className="platform-card-title">Works great if you:</div>
                <div className="platform-card-item">Use macOS or Windows in your business</div>
                <div className="platform-card-item">Need a persistent, always-on print service</div>
                <div className="platform-card-item">Want zero-friction, zero-dialog printing</div>
              </div>
            </div>
          </div>
          {/* Connectivity & Reliability */}
          <div className="connect-section">
            <SectionLabel text="CONNECTIVITY & RELIABILITY" />
            <div className="connect-grid">
              <div className="connect-left">
                <div className="connect-title">
                  <span role="img" aria-label="globe">🌐</span> Always Connected, Always Reliable
                </div>
                <div className="connect-desc">
                  Zentra runs as a local server on your machine, giving you complete control and zero dependency on the cloud when it comes to printing.
                </div>
                <div className="connect-card">
                  <svg width="80" height="56" viewBox="0 0 80 56" fill="none"><rect width="80" height="56" rx="8" fill="#232323" /><rect x="12" y="12" width="56" height="32" rx="4" fill="#fff" fillOpacity="0.08" /><text x="40" y="32" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="bold" alignmentBaseline="middle">Zentra Bridge</text></svg>
                  <div>
                    <div className="connect-card-title">How Zentra stays online</div>
                    <div className="connect-card-link">Watch <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M14 3h7v7" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14L21 3" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                  </div>
                </div>
              </div>
              <div className="connect-list">
                <div className="connect-list-title">Key Features</div>
                <div className="connect-list-item">
                  Real-time WebSocket + HTTP API
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M14 3h7v7" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14L21 3" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="connect-list-item">
                  Offline-ready printing
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M14 3h7v7" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14L21 3" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="connect-list-item">
                  Persistent local connection
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M14 3h7v7" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14L21 3" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </div>
          </div>
          {/* Speed & Simplicity */}
          <div className="speed-section">
            <SectionLabel text="SPEED & SIMPLICITY" />
            <div className="speed-inner">
              <div className="speed-title">
                <span role="img" aria-label="lightning">⚡</span> Fast, Simple, and Built for Any Business
              </div>
              <div className="speed-bar" />
              <div className="speed-grid">
                <div className="speed-desc">
                  Zentra was built with one mission: get your labels printed — instantly, accurately, and without hassle. Whether you&apos;re in retail, manufacturing, food service, or logistics, Zentra is the label printing tool that just works.
                </div>
                <ul className="speed-list">
                  <li><span className="check">✓</span> Instant PNG-to-label rendering</li>
                  <li><span className="check">✓</span> No dialog boxes, no file downloads</li>
                  <li><span className="check">✓</span> Minimal system resource usage</li>
                  <li><span className="check">✓</span> Easy to install, even easier to run</li>
                  <li><span className="check">✓</span> Whether you’re printing 10 or 1,000 labels a day — Zentra keeps up.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .main {
          background: var(--bg-primary);
          min-height: 100vh;
          font-family: var(--font-family);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
        }
        /* HERO SECTION */
        .hero-section {
          width: 100vw;
          min-width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          background: var(--bg-primary);
          padding: 160px 0 112px 0;
          box-sizing: border-box;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 48px;
          align-items: start;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .hero-left {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          height: 100%;
          align-items: flex-start;
        }
        .hero-label {
          margin-left: -72px;
          width: calc(100% + 72px);
        }
        .hero-title {
          font-size: 64px;
          font-weight: 300;
          color: #fff;
          margin-bottom: 40px;
          letter-spacing: -1.5px;
          line-height: 1.1;
          font-family: var(--font-family);
          width: fit-content;
        }
        .hero-subheading {
          color: #9aa0a6;
          font-size: 19px;
          margin-bottom: 0;
          max-width: 600px;
          border-left: 3px solid #444;
          padding-left: 20px;
          font-weight: 400;
          min-height: 64px;
          display: flex;
          align-items: center;
          line-height: 1.6;
        }
        .hero-svg {
          position: relative;
          min-height: 420px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          margin-top: -40px;
        }
        /* FEATURES SECTION */
        .features-section {
          width: 100vw;
          min-width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          background: var(--bg-primary);
          padding: 64px 0 32px 0;
          box-sizing: border-box;
          margin-top: 0;
        }
        .features-stack {
          display: flex;
          flex-direction: column;
          gap: 96px;
        }
        /* Supported Printers */
        .supported-printers-row {
          display: flex;
          gap: 48px;
          align-items: stretch;
          margin-top: 24px;
        }
        .supported-card {
          background: #191919;
          box-shadow: 0 2px 8px rgba(0,0,0,0.10);
          padding: 40px 32px 32px 32px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border: 1px solid #3c4043;
          min-width: 320px;
          max-width: 400px;
          gap: 12px;
        }
        .supported-title {
          color: #fff;
          font-weight: 600;
          font-size: 20px;
          margin-bottom: 12px;
        }
        .supported-list {
          color: #e8eaed;
          font-size: 18px;
          margin: 0;
          padding-left: 18px;
          line-height: 1.7;
          font-weight: 500;
        }
        .supported-desc {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
        }
        .supported-heading {
          font-size: 32px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 16px 0;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .supported-text {
          color: #9aa0a6;
          font-size: 20px;
          margin-bottom: 18px;
          font-weight: 400;
          line-height: 1.6;
        }
        .supported-text.small {
          color: #9aa0a6;
          font-size: 18px;
          margin-top: 18px;
        }
        /* Label Types */
        .label-types {
          border-top: 1px solid #333;
          padding-top: 64px;
          margin-top: 32px;
        }
        .label-types-title {
          font-size: 32px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .label-types-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .label-card {
          background: #191919;
          box-shadow: 0 2px 8px rgba(0,0,0,0.10);
          padding: 40px 32px 32px 32px;
          position: relative;
          min-height: 380px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid #3c4043;
        }
        .dots-svg {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
        }
        .label-icon {
          position: relative;
          z-index: 1;
          margin-bottom: 32px;
          margin-left: 4px;
        }
        .label-title {
          color: #fff;
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 12px;
          z-index: 1;
        }
        .label-desc {
          color: #9aa0a6;
          font-size: 17px;
          line-height: 1.6;
          z-index: 1;
        }
        /* Platform Section */
        .platform-section {
          border-top: 1px solid #333;
          padding-top: 64px;
          margin-top: 32px;
        }
        .platform-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 48px;
          align-items: start;
          margin-top: 24px;
        }
        .platform-left {
          display: flex;
          flex-direction: column;
          gap: 24px;
          justify-content: center;
        }
        .platform-title {
          font-size: 32px;
          font-weight: 700;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .platform-desc {
          color: #9aa0a6;
          font-size: 20px;
          font-weight: 400;
          line-height: 1.6;
        }
        .platform-buttons {
          display: flex;
          gap: 16px;
          margin-top: 8px;
        }
        .platform-btn {
          border: 1.5px solid #e8eaed;
          color: #e8eaed;
          background: transparent;
          border-radius: 2px;
          padding: 14px 32px;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 1px;
          cursor: pointer;
        }
        .platform-card {
          border: 1px solid #3c4043;
          background: #191919;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          min-width: 320px;
        }
        .platform-card-title {
          color: #fff;
          font-weight: 600;
          font-size: 20px;
          margin-bottom: 8px;
          border-bottom: 1px solid #333;
          padding-bottom: 12px;
        }
        .platform-card-item {
          color: #e8eaed;
          font-size: 18px;
          border-bottom: 1px solid #333;
          padding-bottom: 12px;
          margin-bottom: 12px;
        }
        .platform-card-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }
        /* Connectivity Section */
        .connect-section {
          border-top: 1px solid #333;
          padding-top: 64px;
          margin-top: 32px;
        }
        .connect-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 48px;
          align-items: start;
          margin-top: 24px;
        }
        .connect-left {
          display: flex;
          flex-direction: column;
          gap: 24px;
          justify-content: center;
        }
        .connect-title {
          font-size: 32px;
          font-weight: 700;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .connect-desc {
          color: #9aa0a6;
          font-size: 20px;
          font-weight: 400;
          line-height: 1.6;
        }
        .connect-card {
          background: #191919;
          border: 1px solid #3c4043;
          box-shadow: 0 2px 8px rgba(0,0,0,0.10);
          padding: 24px 24px 16px 24px;
          display: flex;
          align-items: center;
          gap: 24px;
          max-width: 420px;
        }
        .connect-card-title {
          color: #fff;
          font-weight: 600;
          font-size: 17px;
        }
        .connect-card-link {
          color: #8ab4f8;
          font-weight: 500;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .connect-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          background: none;
          min-width: 320px;
        }
        .connect-list-title {
          color: #fff;
          font-weight: 600;
          font-size: 20px;
          margin-bottom: 16px;
        }
        .connect-list-item {
          border-top: 1px solid #333;
          padding: 18px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #e8eaed;
          font-size: 18px;
        }
        /* Speed & Simplicity */
        .speed-section {
          border-top: 1px solid #333;
          padding-top: 64px;
          margin-top: 32px;
          margin-bottom: 32px;
        }
        .speed-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 8px;
        }
        .speed-title {
          font-size: 32px;
          font-weight: 700;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 8px;
        }
        .speed-bar {
          height: 3px;
          width: 64px;
          background: linear-gradient(90deg, #4285f4 0%, #34a853 100%);
          border-radius: 2px;
          margin-bottom: 32px;
        }
        .speed-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 48px;
          align-items: start;
        }
        .speed-desc {
          color: #9aa0a6;
          font-size: 20px;
          font-weight: 400;
          line-height: 1.6;
        }
        .speed-list {
          color: #e8eaed;
          font-size: 18px;
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .check {
          color: #34a853;
          font-size: 22px;
          margin-right: 10px;
        }
        /* RESPONSIVE STYLES */
        @media (max-width: 1024px) {
          .hero-grid,
          .label-types-grid,
          .platform-grid,
          .connect-grid,
          .speed-grid {
            grid-template-columns: 1fr 1fr;
          }
          .supported-printers-row {
            flex-direction: column;
            gap: 32px;
          }
        }
        @media (max-width: 768px) {
          .hero-section,
          .features-section {
            padding: 48px 0;
          }
          .hero-grid,
          .label-types-grid,
          .platform-grid,
          .connect-grid,
          .speed-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .hero-grid {
            display: flex;
            flex-direction: column;
            gap: 32px;
            padding: 0 16px;
          }
          .hero-label {
            margin-left: 0;
            width: 100%;
          }
          .hero-title {
            font-size: 40px;
          }
          .hero-svg {
            min-height: 220px;
            margin-top: 0;
          }
          .supported-card,
          .platform-card,
          .connect-list {
            min-width: unset;
            max-width: unset;
          }
          .label-types-grid {
            gap: 24px;
          }
          .label-card {
            min-height: unset;
            padding: 32px 16px;
          }
          .platform-title,
          .connect-title,
          .speed-title {
            font-size: 24px;
          }
          .speed-inner {
            padding: 0 4px;
          }
        }
        @media (max-width: 480px) {
          .container {
            padding: 0 8px;
          }
          .hero-title {
            font-size: 28px;
          }
          .label-types-title,
          .platform-title,
          .connect-title,
          .speed-title {
            font-size: 18px;
          }
        }
      `}</style>
    </main>
  );
}
