'use client'
import Link from "next/link";
import React from "react";
import SectionLabel from "../components/SectionLabel";

export default function Home() {
  return (
    <main className="main">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-grid">
          {/* Left: Hero Text */}
          <div className="hero-left">
            <div className="hero-label">
              <SectionLabel text="HOME" />
              <div className="hero-title">Seamless printing, from web to paper. Instantly. Anywhere.</div>
            </div>
            <div className="hero-content-row">
              <div className="hero-divider" />
              <div className="hero-content">
                <div className="hero-desc">
                  PrintBridge by Zentra allows any web application to connect directly to thermal label printers from the browser—no pop-ups, no cloud, no hassle. Just generate a PNG in your web app and send it to PrintBridge via WebSocket for instant, secure, local printing.
                </div>
                <Link href="/contact" className="hero-btn">Contact us to get started</Link>
              </div>
            </div>
          </div>
          {/* Right: SVG */}
          <div className="hero-svg">
            <svg width="520" height="520" viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 1 }}>
              <g stroke="#444" strokeDasharray="4 4" opacity="0.5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <line key={i} x1={65 * i} y1={0} x2={65 * i} y2={520} />
                ))}
                {Array.from({ length: 9 }).map((_, i) => (
                  <line key={i+20} x1={0} y1={65 * i} x2={520} y2={65 * i} />
                ))}
              </g>
              <rect x="65" y="65" width="130" height="130" fill="none" stroke="#fff" strokeWidth="3.5" />
              <rect x="325" y="325" width="130" height="130" fill="none" stroke="#fbbc04" strokeWidth="4" />
              <rect x="80" y="230" width="70" height="48" rx="10" fill="#232323" stroke="#fff" strokeWidth="2" />
              <rect x="100" y="255" width="30" height="10" rx="2" fill="#fff" fillOpacity="0.2" />
              <rect x="370" y="230" width="70" height="48" rx="10" fill="#232323" stroke="#fff" strokeWidth="2" />
              <rect x="390" y="255" width="30" height="10" rx="2" fill="#fff" fillOpacity="0.2" />
              <rect x="225" y="225" width="70" height="70" rx="16" fill="#ea4335" fillOpacity="0.18" stroke="#ea4335" strokeWidth="3" transform="rotate(45 260 260)" />
              <circle cx="260" cy="260" r="28" fill="#fbbc04" fillOpacity="0.7" stroke="#ea4335" strokeWidth="3" />
              <line x1="150" y1="254" x2="225" y2="260" stroke="#4285f4" strokeWidth="2.5" />
              <line x1="295" y1="260" x2="370" y2="254" stroke="#4285f4" strokeWidth="2.5" />
              <polygon points="225,256 233,260 225,264" fill="#4285f4" />
              <polygon points="370,256 362,260 370,264" fill="#4285f4" />
            </svg>
          </div>
        </div>
      </section>

      {/* VRPs at Zentra (Card Grid) */}
      <section className="glance-section">
        <div className="container">
          <SectionLabel text="INDUSTRY APPLICATIONS" />
          <div className="glance-grid">
            <div>
              <div className="glance-title">Industries We Serve</div>
              <div className="glance-desc">
                PrintBridge is trusted across a wide range of industries for reliable, secure, and instant label printing:
              </div>
              <ul className="usecases-list">
                <li>E-commerce Fulfillment<div className="usecase-desc">Automate shipping label printing from order management systems.</div></li>
                <li>Inventory Management<div className="usecase-desc">Print product labels and barcodes from web-based inventory systems.</div></li>
                <li>Point of Sale<div className="usecase-desc">Silent receipt and label printing from web POS applications.</div></li>
                <li>Healthcare<div className="usecase-desc">Patient wristbands and medication labels from EMR systems.</div></li>
                <li>Manufacturing<div className="usecase-desc">Quality control labels and product identification from MES systems.</div></li>
                <li>Logistics<div className="usecase-desc">Warehouse labels, shipping documents, and tracking information.</div></li>
              </ul>
            </div>
            <div className="glance-videos">
              {/* Video 1 */}
              <div className="video-row">
                <div className="video-thumb">
                  <svg width="320" height="180" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="320" height="180" rx="12" fill="#232323" />
                    <rect x="20" y="20" width="280" height="140" rx="8" fill="#fff" fillOpacity="0.08" />
                    <text x="160" y="90" textAnchor="middle" fontSize="28" fill="#fff" fontWeight="bold" alignmentBaseline="middle">Zentra Overview</text>
                  </svg>
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="video-play"><circle cx="28" cy="28" r="28" fill="#fff" fillOpacity="0.85"/><polygon points="22,18 40,28 22,38" fill="#4285f4"/></svg>
                </div>
                <div>
                  <div className="video-title">Zentra Overview</div>
                  <div className="video-link">
                    Watch
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="video-link-icon"><path d="M14 3h7v7" stroke="#9aa0a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14L21 3" stroke="#9aa0a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 21H3V3" stroke="#9aa0a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>
              {/* Video 2 */}
              <div className="video-row">
                <div className="video-thumb">
                  <svg width="320" height="180" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="320" height="180" rx="12" fill="#232323" />
                    <rect x="20" y="20" width="280" height="140" rx="8" fill="#fff" fillOpacity="0.08" />
                    <text x="160" y="90" textAnchor="middle" fontSize="28" fill="#fff" fontWeight="bold" alignmentBaseline="middle">What is Zentra?</text>
                  </svg>
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="video-play"><circle cx="28" cy="28" r="28" fill="#fff" fillOpacity="0.85"/><polygon points="22,18 40,28 22,38" fill="#ea4335"/></svg>
                </div>
                <div>
                  <div className="video-title">What is Zentra?</div>
                  <div className="video-link">
                    Watch
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="video-link-icon"><path d="M14 3h7v7" stroke="#9aa0a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14L21 3" stroke="#9aa0a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 21H3V3" stroke="#9aa0a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="features-section">
        <div className="container">
          <SectionLabel text="FEATURES" />
          <div className="features-grid">
            {/* Feature 1 */}
            <div className="feature-card">
              <svg width="100%" height="160" viewBox="0 0 340 160" className="dots-svg">
                {Array.from({ length: 8 }).map((_, i) =>
                  Array.from({ length: 4 }).map((_, j) =>
                    <circle key={i + '-' + j} cx={40 + i * 40} cy={32 + j * 32} r="2" fill="#444" />
                  )
                )}
              </svg>
              <div className="feature-icon">
                <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><path d="M9 9L5 13H2v-2h3l4-4V9zm6 6l4-4h3v2h-3l-4 4v-2zm-6 0v2l4-4V9l-4 4v2zm6-6V7l-4 4v2l4-4z" fill="#4285f4"/></svg>
              </div>
              <div className="feature-step">STEP 1</div>
              <div className="feature-title">Silent Print Processing</div>
              <div className="feature-desc">Print PNG images directly from web applications without any user dialogs or confirmation popups. Fully automated printing workflow for seamless integration.</div>
              <div className="feature-link">Review docs <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="feature-link-icon"><path d="M14 3h7v7" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14L21 3" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            </div>
            {/* Feature 2 */}
            <div className="feature-card">
              <svg width="100%" height="160" viewBox="0 0 340 160" className="dots-svg">
                {Array.from({ length: 8 }).map((_, i) =>
                  Array.from({ length: 4 }).map((_, j) =>
                    <circle key={i + '-' + j} cx={40 + i * 40} cy={32 + j * 32} r="2" fill="#444" />
                  )
                )}
              </svg>
              <div className="feature-icon">
                <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#4285f4" strokeWidth="2"/><path d="M12 8v4l3 3" stroke="#4285f4" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div className="feature-step">STEP 2</div>
              <div className="feature-title">Real-time WebSocket Bridge</div>
              <div className="feature-desc">Secure WebSocket connection enables instant communication between your web application and local printers. Fast, reliable data transfer with configurable security options.</div>
              <div className="feature-link">How it works <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="feature-link-icon"><path d="M14 3h7v7" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14L21 3" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            </div>
            {/* Feature 3 */}
            <div className="feature-card">
              <svg width="100%" height="160" viewBox="0 0 340 160" className="dots-svg">
                {Array.from({ length: 8 }).map((_, i) =>
                  Array.from({ length: 4 }).map((_, j) =>
                    <circle key={i + '-' + j} cx={40 + i * 40} cy={32 + j * 32} r="2" fill="#444" />
                  )
                )}
              </svg>
              <div className="feature-icon">
                <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="8" rx="4" fill="#4285f4"/></svg>
              </div>
              <div className="feature-step">STEP 3</div>
              <div className="feature-title">Any Label Size</div>
              <div className="feature-desc">Support for all label dimensions and formats. From shipping labels to product tags, business cards to receipts - Zentra handles any print job seamlessly.</div>
              <div className="feature-link">Start printing <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="feature-link-icon"><path d="M14 3h7v7" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14L21 3" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="how-section">
        <div className="container">
          <SectionLabel text="HOW ZENTRA WORKS" />
          <div className="how-title">How Zentra Works</div>
          <div className="how-steps">
            <div className="how-step">
              <div className="how-step-label">Step 1</div>
              <div className="how-step-title">Install Zentra</div>
              <div className="how-step-desc">Download and install the Zentra native application for your OS.</div>
            </div>
            <div className="how-step">
              <div className="how-step-label">Step 2</div>
              <div className="how-step-title">Connect Web App</div>
              <div className="how-step-desc">Establish a WebSocket connection from your web application to Zentra.</div>
            </div>
            <div className="how-step">
              <div className="how-step-label">Step 3</div>
              <div className="how-step-title">Send Print Jobs</div>
              <div className="how-step-desc">Submit PNG images through our simple WebSocket API.</div>
            </div>
            <div className="how-step">
              <div className="how-step-label">Step 4</div>
              <div className="how-step-title">Silent Printing</div>
              <div className="how-step-desc">Zentra processes and prints automatically without user interaction.</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials-section">
        <div className="container">
          <SectionLabel text="TESTIMONIALS" />
          <div className="testimonials-grid">
            <div className="testimonial-card">
              &quot;Zentra has transformed our shipping workflow. Printing is now instant and hands-free.&quot;
              <div className="testimonial-author">— Operations Lead, E-commerce</div>
            </div>
            <div className="testimonial-card">
              &quot;We integrated Zentra in a day. Our staff love the silent label printing.&quot;
              <div className="testimonial-author">— IT Manager, Retail</div>
            </div>
            <div className="testimonial-card">
              &quot;No more printer dialogs or popups. Zentra just works.&quot;
              <div className="testimonial-author">— Product Owner, SaaS</div>
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
          font-stretch: normal;
          width: fit-content;
        }
        .hero-content-row {
          display: flex;
          align-items: flex-start;
          min-height: 180px;
        }
        .hero-divider {
          width: 2px;
          background: #444;
          height: 100%;
          margin-right: 32px;
          margin-top: 4px;
          opacity: 0.8;
          align-self: stretch;
        }
        .hero-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 28px;
          justify-content: space-between;
        }
        .hero-desc {
          color: #e8eaed;
          font-size: 19px;
          font-weight: 400;
          line-height: 1.6;
          font-family: var(--font-family);
          letter-spacing: 0.01em;
        }
        .hero-btn {
          border: 1.5px solid #e8eaed;
          color: #e8eaed;
          background: transparent;
          border-radius: 2px;
          padding: 14px 0;
          width: 33%;
          min-width: 160px;
          max-width: 200px;
          text-align: center;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s, color 0.2s, border 0.2s;
          display: block;
          font-family: var(--font-family);
          letter-spacing: 1px;
          margin-top: 8px;
          align-self: flex-start;
        }
        .hero-svg {
          position: relative;
          min-height: 520px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          margin-top: -40px;
        }

        /* GLANCE SECTION */
        .glance-section {
          width: 100vw;
          min-width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          background: var(--bg-primary);
          padding: 32px 0;
          box-sizing: border-box;
        }
        .glance-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: flex-start;
        }
        .glance-title {
          color: #fff;
          font-size: 32px;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .glance-desc {
          color: #9aa0a6;
          font-size: 16px;
          margin-bottom: 24px;
          line-height: 1.6;
        }
        .glance-videos {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .video-row {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .video-thumb {
          width: 320px;
          height: 180px;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
        }
        .video-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .video-title {
          color: #fff;
          font-weight: 500;
          font-size: 18px;
          margin-bottom: 4px;
        }
        .video-link {
          display: flex;
          align-items: center;
          color: #9aa0a6;
          font-size: 14px;
          gap: 4px;
        }
        .video-link-icon {
          display: inline;
          vertical-align: middle;
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
          padding: 48px 0;
          box-sizing: border-box;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .feature-card {
          background: #191919;
          padding: 40px 32px 32px 32px;
          position: relative;
          min-height: 380px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.10);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .dots-svg {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
        }
        .feature-icon {
          position: relative;
          z-index: 1;
          margin-bottom: 32px;
          margin-left: 4px;
        }
        .feature-step {
          color: #9aa0a6;
          font-size: 13px;
          letter-spacing: 1.5px;
          margin-bottom: 8px;
          z-index: 1;
        }
        .feature-title {
          color: #fff;
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 12px;
          z-index: 1;
        }
        .feature-desc {
          color: #9aa0a6;
          font-size: 16px;
          margin-bottom: 32px;
          z-index: 1;
        }
        .feature-link {
          display: flex;
          align-items: center;
          color: #8ab4f8;
          font-weight: 500;
          font-size: 16px;
          cursor: pointer;
          z-index: 1;
        }
        .feature-link-icon {
          margin-left: 4px;
        }

        /* HOW IT WORKS SECTION */
        .how-section {
          width: 100vw;
          min-width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          background: var(--bg-primary);
          padding: 64px 0;
          box-sizing: border-box;
        }
        .how-title {
          color: #fff;
          font-size: 40px;
          font-weight: 700;
          text-align: left;
          margin-bottom: 48px;
          letter-spacing: -1.5px;
        }
        .how-steps {
          display: flex;
          flex-direction: row;
          gap: 48px;
          justify-content: space-between;
          align-items: flex-start;
        }
        .how-step {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .how-step-label {
          color: #8ab4f8;
          font-weight: 700;
          font-size: 18px;
          margin-bottom: 8px;
        }
        .how-step-title {
          color: #fff;
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .how-step-desc {
          color: #e8eaed;
          font-size: 16px;
          margin-bottom: 0;
        }

        /* USE CASES SECTION */
        .usecases-section {
          width: 100vw;
          min-width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          background: var(--bg-primary);
          padding: 48px 0;
          margin-top: 32px;
          box-sizing: border-box;
        }
        .usecases-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .usecases-list li {
          color: #fff;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .usecase-desc {
          color: #9aa0a6;
          font-size: 16px;
          font-weight: 400;
          margin-top: 8px;
        }

        /* TESTIMONIALS SECTION */
        .testimonials-section {
          width: 100vw;
          min-width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          background: var(--bg-primary);
          padding: 48px 0;
          box-sizing: border-box;
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .testimonial-card {
          background: #191919;
          border: 1px solid #3c4043;
          padding: 32px;
          color: #fff;
          font-style: italic;
        }
        .testimonial-author {
          color: #9aa0a6;
          font-weight: 500;
          font-size: 15px;
          margin-top: 16px;
          font-style: normal;
        }

        /* RESPONSIVE STYLES */
        @media (max-width: 1024px) {
          .hero-grid,
          .glance-grid,
          .features-grid,
          .testimonials-grid,
          .usecases-list {
            grid-template-columns: 1fr 1fr;
          }
          .how-steps {
            gap: 24px;
          }
        }
        @media (max-width: 768px) {
          .hero-section,
          .glance-section,
          .features-section,
          .how-section,
          .usecases-section,
          .testimonials-section {
            padding: 48px 0;
          }
          .hero-grid, .glance-grid, .features-grid, .testimonials-grid, .usecases-list {
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
          .hero-content-row {
            flex-direction: column;
            min-height: unset;
          }
          .hero-divider {
            display: none;
          }
          .hero-btn {
            width: 100%;
            min-width: unset;
            max-width: unset;
          }
          .hero-svg {
            min-height: 260px;
            margin-top: 0;
          }
          .glance-videos .video-thumb {
            width: 100%;
            max-width: 320px;
            height: auto;
          }
          .video-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .features-grid {
            gap: 24px;
          }
          .feature-card {
            min-height: unset;
            padding: 32px 16px;
          }
          .how-title {
            font-size: 28px;
          }
          .how-steps {
            flex-direction: column;
            gap: 24px;
          }
          .usecases-list {
            gap: 16px;
          }
          .testimonials-grid {
            gap: 16px;
          }
        }
        @media (max-width: 480px) {
          .container {
            padding: 0 8px;
          }
          .hero-title {
            font-size: 28px;
          }
          .glance-title {
            font-size: 22px;
          }
          .feature-title {
            font-size: 18px;
          }
          .how-title {
            font-size: 20px;
          }
        }
      `}</style>
    </main>
  );
}
