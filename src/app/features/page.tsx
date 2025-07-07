import React from "react";
import SectionLabel from "../components/SectionLabel";


export default function Features() {
  return (
    <main style={{ background: 'var(--bg-primary)', minHeight: '100vh', fontFamily: 'var(--font-family)' }}>
      {/* HERO SECTION */}
      <section
        style={{
          width: '100vw',
          minWidth: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          background: 'var(--bg-primary)',
          padding: '160px 0 112px 0', // match Home
          boxSizing: 'border-box',
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '48px',
          alignItems: 'start',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 32px',
        }}>
          {/* Left: Hero Text */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%', alignItems: 'flex-start' }}>
            <div style={{ marginLeft: '-72px', width: 'calc(100% + 72px)' }}>
              <SectionLabel text="FEATURES" />
              <div style={{ fontSize: '64px', fontWeight: 300, color: '#fff', marginBottom: '40px', letterSpacing: '-1.5px', lineHeight: 1.1, fontFamily: 'var(--font-family)', width: 'fit-content' }}>Zentra Features</div>
            </div>
            {/* Subheading with left border */}
            <div style={{ color: '#9aa0a6', fontSize: '19px', marginBottom: '0', maxWidth: '600px', borderLeft: '3px solid #444', paddingLeft: '20px', fontWeight: 400, minHeight: '64px', display: 'flex', alignItems: 'center', lineHeight: 1.6 }}>
              InstaLabel’s print bridge is a cross-platform local server that powers reliable, fast, and accurate label printing directly from your browser — no drivers, no dialogs, no delays.
            </div>
          </div>
          {/* Right: Hero SVG with color accents (already sharp) */}
          <div style={{ position: 'relative', minHeight: '420px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', marginTop: '-40px' }}>
            <svg width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 1 }}>
              {/* Grid - bigger squares */}
              <g stroke="#444" strokeDasharray="4 4" opacity="0.5">
                {Array.from({ length: 7 }).map((_, i) => (
                  <line key={i} x1={60 * i} y1={0} x2={60 * i} y2={420} />
                ))}
                {Array.from({ length: 7 }).map((_, i) => (
                  <line key={i+20} x1={0} y1={60 * i} x2={420} y2={60 * i} />
                ))}
              </g>
              {/* Browser window with color accents */}
              <rect x="60" y="60" width="300" height="180" rx="0" fill="#232323" stroke="#fff" strokeWidth="2" />
              {/* Browser tabs */}
              <circle cx="80" cy="78" r="7" fill="#ea4335" />
              <circle cx="100" cy="78" r="7" fill="#fbbc04" />
              <circle cx="120" cy="78" r="7" fill="#34a853" />
              {/* Play button */}
              <circle cx="210" cy="150" r="32" fill="#fff" fillOpacity="0.9" />
              <polygon points="200,135 230,150 200,165" fill="#4285f4" />
              {/* Printer with color accent */}
              <rect x="150" y="270" width="120" height="60" rx="0" fill="#232323" stroke="#fff" strokeWidth="2" />
              <rect x="180" y="295" width="60" height="18" rx="0" fill="#fff" fillOpacity="0.18" />
              {/* Paper output */}
              <rect x="195" y="330" width="30" height="18" rx="0" fill="#fff" fillOpacity="0.7" />
              {/* Accent circle */}
              <circle cx="340" cy="340" r="18" fill="#4285f4" fillOpacity="0.18" />
              {/* Accent line */}
              <line x1="320" y1="100" x2="400" y2="180" stroke="#ea4335" strokeWidth="3" opacity="0.7" />
            </svg>
          </div>
        </div>
      </section>
      {/* GROUPED FEATURES SECTIONS */}
      <section style={{ width: '100vw', minWidth: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', background: 'var(--bg-primary)', padding: '64px 0 32px 0', boxSizing: 'border-box', marginTop: '0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px', display: 'flex', flexDirection: 'column', gap: '96px' }}>
          {/* Supported Printers */}
          <div>
            <SectionLabel text="SUPPORTED PRINTERS" />
            <div style={{ display: 'flex', gap: '48px', alignItems: 'stretch', marginTop: '24px' }}>
              {/* Left: Card with brands */}
              <div style={{ background: '#191919', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', padding: '40px 32px 32px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '1px solid #3c4043', minWidth: '320px', maxWidth: '400px', gap: '12px' }}>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: '20px', marginBottom: '12px' }}>Tested and working with:</div>
                <ul style={{ color: '#e8eaed', fontSize: '18px', margin: 0, paddingLeft: '18px', lineHeight: 1.7, fontWeight: 500 }}>
                  <li>Zebra (ZD220, ZD420, etc.)</li>
                  <li>MUNBYN (ITPP941, ITPP129)</li>
                  <li>DYMO (4XL, LabelWriter series)</li>
                  <li>Brother QL series</li>
                  <li>Rollo and more</li>
                </ul>
              </div>
              {/* Right: Text */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
                <div style={{ fontSize: '32px', fontWeight: 700, color: '#fff', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span role="img" aria-label="printer">🖨️</span> Works with Virtually All USB Label Printers
                </div>
                <div style={{ color: '#9aa0a6', fontSize: '20px', marginBottom: '18px', fontWeight: 400, lineHeight: 1.6 }}>
                  Seamless compatibility out of the box.<br /><br />
                  Zentra supports a wide range of USB-connected thermal label printers — no special hardware required. As long as your printer is installed with a system driver, Zentra will detect it automatically and deliver pixel-perfect prints every time.
                </div>
                <div style={{ color: '#9aa0a6', fontSize: '18px', marginTop: '18px' }}>
                  Whether you&apos;re printing 2-inch prep labels or large PPDS labels, Zentra gets the size right — no matter the brand.
                </div>
              </div>
            </div>
          </div>
          {/* Label Types (3 cards, homepage style) */}
          <div style={{ borderTop: '1px solid #333', paddingTop: '64px', marginTop: '32px' }}>
            <SectionLabel text="LABEL TYPES" />
            <div style={{ fontSize: '32px', fontWeight: 700, color: '#fff', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span role="img" aria-label="label">🏷️</span> Supports All Label Types — For Any Industry
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
              {/* Card 1 */}
              <div style={{ background: '#191919', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', padding: '40px 32px 32px 32px', position: 'relative', minHeight: '380px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid #3c4043' }}>
                {/* Dots grid (top only, 4 lines) */}
                <svg width="100%" height="160" viewBox="0 0 340 160" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
                  {Array.from({ length: 8 }).map((_, i) =>
                    Array.from({ length: 4 }).map((_, j) =>
                      <circle key={i + '-' + j} cx={40 + i * 40} cy={32 + j * 32} r="2" fill="#444" />
                    )
                  )}
                </svg>
                {/* Icon with accent */}
                <div style={{ position: 'relative', zIndex: 1, marginBottom: '32px', marginLeft: '4px' }}>
                  <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="8" rx="4" fill="#4285f4"/></svg>
                </div>
                <div style={{ color: '#fff', fontSize: '24px', fontWeight: 600, marginBottom: '12px', zIndex: 1 }}>Food & Compliance Labels</div>
                <div style={{ color: '#9aa0a6', fontSize: '17px', lineHeight: 1.6, zIndex: 1 }}>Prep, cook, expiry, allergen, and Natasha’s Law labels for kitchens and food production.</div>
              </div>
              {/* Card 2 */}
              <div style={{ background: '#191919', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', padding: '40px 32px 32px 32px', position: 'relative', minHeight: '380px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid #3c4043' }}>
                <svg width="100%" height="160" viewBox="0 0 340 160" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
                  {Array.from({ length: 8 }).map((_, i) =>
                    Array.from({ length: 4 }).map((_, j) =>
                      <circle key={i + '-' + j} cx={40 + i * 40} cy={32 + j * 32} r="2" fill="#444" />
                    )
                  )}
                </svg>
                <div style={{ position: 'relative', zIndex: 1, marginBottom: '32px', marginLeft: '4px' }}>
                  <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="3" fill="#34a853"/></svg>
                </div>
                <div style={{ color: '#fff', fontSize: '24px', fontWeight: 600, marginBottom: '12px', zIndex: 1 }}>Shipping & Logistics</div>
                <div style={{ color: '#9aa0a6', fontSize: '17px', lineHeight: 1.6, zIndex: 1 }}>Shipping, barcode, QR code, and inventory labels for warehouses and logistics.</div>
              </div>
              {/* Card 3 */}
              <div style={{ background: '#191919', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', padding: '40px 32px 32px 32px', position: 'relative', minHeight: '380px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid #3c4043' }}>
                <svg width="100%" height="160" viewBox="0 0 340 160" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
                  {Array.from({ length: 8 }).map((_, i) =>
                    Array.from({ length: 4 }).map((_, j) =>
                      <circle key={i + '-' + j} cx={40 + i * 40} cy={32 + j * 32} r="2" fill="#444" />
                    )
                  )}
                </svg>
                <div style={{ position: 'relative', zIndex: 1, marginBottom: '32px', marginLeft: '4px' }}>
                  <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="2" fill="#fbbc04"/></svg>
                </div>
                <div style={{ color: '#fff', fontSize: '24px', fontWeight: 600, marginBottom: '12px', zIndex: 1 }}>Retail & Custom Labels</div>
                <div style={{ color: '#9aa0a6', fontSize: '17px', lineHeight: 1.6, zIndex: 1 }}>Product, price, shelf, and custom-branded labels for retail and internal workflows.</div>
              </div>
            </div>
          </div>
          {/* Cross-Platform Simplicity */}
          <div style={{ borderTop: '1px solid #333', paddingTop: '64px', marginTop: '32px' }}>
            <SectionLabel text="CROSS-PLATFORM SIMPLICITY" />
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'start', marginTop: '24px' }}>
              {/* Left: Heading, description, buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', justifyContent: 'center' }}>
                <div style={{ fontSize: '32px', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span role="img" aria-label="laptop">💻</span> Cross-Platform Simplicity
                </div>
                <div style={{ color: '#9aa0a6', fontSize: '20px', fontWeight: 400, lineHeight: 1.6 }}>
                  Zentra is built from the ground up to work perfectly on both Mac and Windows environments — with native behavior and system-level reliability.
                </div>
                <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                  <button style={{ border: '1.5px solid #e8eaed', color: '#e8eaed', background: 'transparent', borderRadius: '2px', padding: '14px 32px', fontSize: '16px', fontWeight: 600, letterSpacing: '1px', cursor: 'pointer' }}>Download for macOS</button>
                  <button style={{ border: '1.5px solid #e8eaed', color: '#e8eaed', background: 'transparent', borderRadius: '2px', padding: '14px 32px', fontSize: '16px', fontWeight: 600, letterSpacing: '1px', cursor: 'pointer' }}>Download for Windows</button>
                </div>
              </div>
              {/* Right: Bordered list */}
              <div style={{ border: '1px solid #3c4043', background: '#191919', padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '320px' }}>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: '20px', marginBottom: '8px', borderBottom: '1px solid #333', paddingBottom: '12px' }}>Works great if you:</div>
                <div style={{ color: '#e8eaed', fontSize: '18px', borderBottom: '1px solid #333', paddingBottom: '12px', marginBottom: '12px' }}>Use macOS or Windows in your business</div>
                <div style={{ color: '#e8eaed', fontSize: '18px', borderBottom: '1px solid #333', paddingBottom: '12px', marginBottom: '12px' }}>Need a persistent, always-on print service</div>
                <div style={{ color: '#e8eaed', fontSize: '18px' }}>Want zero-friction, zero-dialog printing</div>
              </div>
            </div>
          </div>
          {/* Connectivity & Reliability (split, with card and list) */}
          <div style={{ borderTop: '1px solid #333', paddingTop: '64px', marginTop: '32px' }}>
            <SectionLabel text="CONNECTIVITY & RELIABILITY" />
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'start', marginTop: '24px' }}>
              {/* Left: Heading, description, card */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', justifyContent: 'center' }}>
                <div style={{ fontSize: '32px', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span role="img" aria-label="globe">🌐</span> Always Connected, Always Reliable
                </div>
                <div style={{ color: '#9aa0a6', fontSize: '20px', fontWeight: 400, lineHeight: 1.6 }}>
                  Zentra runs as a local server on your machine, giving you complete control and zero dependency on the cloud when it comes to printing.
                </div>
                {/* Card with image and 'Watch' */}
                <div style={{ background: '#191919', border: '1px solid #3c4043', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', padding: '24px 24px 16px 24px', display: 'flex', alignItems: 'center', gap: '24px', maxWidth: '420px' }}>
                  <svg width="80" height="56" viewBox="0 0 80 56" fill="none"><rect width="80" height="56" rx="8" fill="#232323" /><rect x="12" y="12" width="56" height="32" rx="4" fill="#fff" fillOpacity="0.08" /><text x="40" y="32" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="bold" alignmentBaseline="middle">Zentra Bridge</text></svg>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: '17px' }}>How Zentra stays online</div>
                    <div style={{ color: '#8ab4f8', fontWeight: 500, fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>Watch <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M14 3h7v7" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14L21 3" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                  </div>
                </div>
              </div>
              {/* Right: List with chevrons and dividers */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0', background: 'none', minWidth: '320px' }}>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: '20px', marginBottom: '16px' }}>Key Features</div>
                <div style={{ borderTop: '1px solid #333', padding: '18px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#e8eaed', fontSize: '18px' }}>
                  Real-time WebSocket + HTTP API
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M14 3h7v7" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14L21 3" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div style={{ borderTop: '1px solid #333', padding: '18px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#e8eaed', fontSize: '18px' }}>
                  Offline-ready printing
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M14 3h7v7" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14L21 3" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div style={{ borderTop: '1px solid #333', padding: '18px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#e8eaed', fontSize: '18px' }}>
                  Persistent local connection
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M14 3h7v7" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14L21 3" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </div>
          </div>
          {/* Speed & Simplicity (clean, open layout, no box) */}
          <div style={{ borderTop: '1px solid #333', paddingTop: '64px', marginTop: '32px', marginBottom: '32px' }}>
            <SectionLabel text="SPEED & SIMPLICITY" />
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 8px' }}>
              <div style={{ fontSize: '32px', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '8px' }}>
                <span role="img" aria-label="lightning">⚡</span> Fast, Simple, and Built for Any Business

              </div>
              <div style={{ height: '3px', width: '64px', background: 'linear-gradient(90deg, #4285f4 0%, #34a853 100%)', borderRadius: '2px', marginBottom: '32px' }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'start' }}>
                {/* Left: Summary */}
                <div style={{ color: '#9aa0a6', fontSize: '20px', fontWeight: 400, lineHeight: 1.6 }}>
                Zentra was built with one mission: get your labels printed — instantly, accurately, and without hassle. Whether you&apos;re in retail, manufacturing, food service, or logistics, Zentra is the label printing tool that just works.
                </div>
                {/* Right: Key points list */}
                <ul style={{ color: '#e8eaed', fontSize: '18px', margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#34a853', fontSize: '22px' }}>✓</span> Instant PNG-to-label rendering</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#34a853', fontSize: '22px' }}>✓</span> No dialog boxes, no file downloads</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#34a853', fontSize: '22px' }}>✓</span> Minimal system resource usage</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#34a853', fontSize: '22px' }}>✓</span> Easy to install, even easier to run</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#34a853', fontSize: '22px' }}>✓</span> Whether you’re printing 10 or 1,000 labels a day — Zentra keeps up.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 