import Link from "next/link";
import React from "react";
import SectionLabel from "./components/SectionLabel";

export default function Home() {
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
          padding: '160px 0 112px 0',
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
              <SectionLabel text="HOME" />
              <div style={{ fontSize: '64px', fontWeight: 300, color: '#fff', marginBottom: '40px', letterSpacing: '-1.5px', lineHeight: 1.1, fontFamily: 'var(--font-family)', fontStretch: 'normal', width: 'fit-content' }}>Welcome!</div>
            </div>
            {/* Content Split by Vertical Divider */}
            <div style={{ display: 'flex', alignItems: 'flex-start', minHeight: '180px' }}>
              {/* Vertical Divider (full height to end of button) */}
              <div style={{ width: '2px', background: '#444', height: '100%', marginRight: '32px', marginTop: '4px', opacity: 0.8, alignSelf: 'stretch' }}></div>
              {/* Text Block + Button */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '28px', justifyContent: 'space-between' }}>
                <div style={{ color: '#e8eaed', fontSize: '19px', fontWeight: 400, lineHeight: 1.6, marginBottom: '0', fontFamily: 'var(--font-family)', letterSpacing: '0.01em' }}>
                  Zentra PrinterBridge enables silent, automated printing from your web applications to any connected printer using a secure WebSocket API.<br /><br />
                  Zentra is available for licensed customers. Please sign up or contact sales for access.
                </div>
                <Link href="/support" style={{ border: '1.5px solid #e8eaed', color: '#e8eaed', background: 'transparent', borderRadius: '2px', padding: '14px 0', width: '33%', minWidth: '160px', maxWidth: '200px', textAlign: 'center', fontSize: '16px', fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s, color 0.2s, border 0.2s', display: 'block', fontFamily: 'var(--font-family)', letterSpacing: '1px', marginTop: '8px', alignSelf: 'flex-start' }}>Request Access</Link>
              </div>
            </div>
          </div>
          {/* Right: Minimal SVG (PC, server, printer, grid) */}
          <div style={{ position: 'relative', minHeight: '520px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', marginTop: '-40px' }}>
            <svg width="520" height="520" viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 1 }}>
              {/* Grid - bigger squares */}
              <g stroke="#444" strokeDasharray="4 4" opacity="0.5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <line key={i} x1={65 * i} y1={0} x2={65 * i} y2={520} />
                ))}
                {Array.from({ length: 9 }).map((_, i) => (
                  <line key={i+20} x1={0} y1={65 * i} x2={520} y2={65 * i} />
                ))}
              </g>
              {/* Thicker, more pronounced squares */}
              <rect x="65" y="65" width="130" height="130" fill="none" stroke="#fff" strokeWidth="3.5" />
              <rect x="325" y="325" width="130" height="130" fill="none" stroke="#fbbc04" strokeWidth="4" />
              {/* PC (left) */}
              <rect x="80" y="230" width="70" height="48" rx="10" fill="#232323" stroke="#fff" strokeWidth="2" />
              <rect x="100" y="255" width="30" height="10" rx="2" fill="#fff" fillOpacity="0.2" />
              {/* Printer (right) */}
              <rect x="370" y="230" width="70" height="48" rx="10" fill="#232323" stroke="#fff" strokeWidth="2" />
              <rect x="390" y="255" width="30" height="10" rx="2" fill="#fff" fillOpacity="0.2" />
              {/* Server (center, diamond with color) */}
              <rect x="225" y="225" width="70" height="70" rx="16" fill="#ea4335" fillOpacity="0.18" stroke="#ea4335" strokeWidth="3" transform="rotate(45 260 260)" />
              <circle cx="260" cy="260" r="28" fill="#fbbc04" fillOpacity="0.7" stroke="#ea4335" strokeWidth="3" />
              {/* Lines: PC -> Server -> Printer */}
              <line x1="150" y1="254" x2="225" y2="260" stroke="#4285f4" strokeWidth="2.5" />
              <line x1="295" y1="260" x2="370" y2="254" stroke="#4285f4" strokeWidth="2.5" />
              {/* Arrowheads */}
              <polygon points="225,256 233,260 225,264" fill="#4285f4" />
              <polygon points="370,256 362,260 370,264" fill="#4285f4" />
            </svg>
          </div>
        </div>
      </section>
      {/* VRPs at Zentra (Card Grid) */}
      <section style={{
        width: '100vw',
        minWidth: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        background: 'var(--bg-primary)',
        padding: '32px 0',
        boxSizing: 'border-box',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          <SectionLabel text="ZENTRA AT A GLANCE" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'flex-start' }}>
            <div>
              <div style={{ color: '#fff', fontSize: '32px', fontWeight: 600, marginBottom: '16px' }}>Zentra at a Glance</div>
              <div style={{ color: '#9aa0a6', fontSize: '16px', marginBottom: '24px', lineHeight: 1.6 }}>
                Zentra provides a secure, silent, and universal print bridge for your business. See the videos on the right for an overview of Zentra’s capabilities and integrations.
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Video 1 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '320px', height: '180px', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
                  {/* Replace with actual video thumbnail or placeholder */}
                  <svg width="320" height="180" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="320" height="180" rx="12" fill="#232323" />
                    <rect x="20" y="20" width="280" height="140" rx="8" fill="#fff" fillOpacity="0.08" />
                    <text x="160" y="90" textAnchor="middle" fontSize="28" fill="#fff" fontWeight="bold" alignmentBaseline="middle">Zentra Overview</text>
                  </svg>
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}><circle cx="28" cy="28" r="28" fill="#fff" fillOpacity="0.85"/><polygon points="22,18 40,28 22,38" fill="#4285f4"/></svg>
                </div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 500, fontSize: '18px', marginBottom: '4px' }}>Zentra Overview</div>
                  <div style={{ display: 'flex', alignItems: 'center', color: '#9aa0a6', fontSize: '14px', gap: '4px' }}>
                    Watch
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ display: 'inline', verticalAlign: 'middle' }}><path d="M14 3h7v7" stroke="#9aa0a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14L21 3" stroke="#9aa0a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 21H3V3" stroke="#9aa0a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>
              {/* Video 2 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '320px', height: '180px', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
                  {/* Replace with actual video thumbnail or placeholder */}
                  <svg width="320" height="180" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="320" height="180" rx="12" fill="#232323" />
                    <rect x="20" y="20" width="280" height="140" rx="8" fill="#fff" fillOpacity="0.08" />
                    <text x="160" y="90" textAnchor="middle" fontSize="28" fill="#fff" fontWeight="bold" alignmentBaseline="middle">What is Zentra?</text>
                  </svg>
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}><circle cx="28" cy="28" r="28" fill="#fff" fillOpacity="0.85"/><polygon points="22,18 40,28 22,38" fill="#ea4335"/></svg>
                </div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 500, fontSize: '18px', marginBottom: '4px' }}>What is Zentra?</div>
                  <div style={{ display: 'flex', alignItems: 'center', color: '#9aa0a6', fontSize: '14px', gap: '4px' }}>
                    Watch
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ display: 'inline', verticalAlign: 'middle' }}><path d="M14 3h7v7" stroke="#9aa0a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14L21 3" stroke="#9aa0a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 21H3V3" stroke="#9aa0a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FEATURES GRID */}
      <section style={{
        width: '100vw',
        minWidth: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        background: 'var(--bg-primary)',
        padding: '48px 0',
        boxSizing: 'border-box',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          <SectionLabel text="FEATURES" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {/* Feature 1: Silent Print Processing */}
            <div style={{ background: '#191919', /* no borderRadius */ padding: '40px 32px 32px 32px', position: 'relative', minHeight: '380px', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
                <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><path d="M9 9L5 13H2v-2h3l4-4V9zm6 6l4-4h3v2h-3l-4 4v-2zm-6 0v2l4-4V9l-4 4v2zm6-6V7l-4 4v2l4-4z" fill="#4285f4"/></svg>
              </div>
              <div style={{ color: '#9aa0a6', fontSize: '13px', letterSpacing: '1.5px', marginBottom: '8px', zIndex: 1 }}>STEP 1</div>
              <div style={{ color: '#fff', fontSize: '24px', fontWeight: 600, marginBottom: '12px', zIndex: 1 }}>Silent Print Processing</div>
              <div style={{ color: '#9aa0a6', fontSize: '16px', marginBottom: '32px', zIndex: 1 }}>Print PNG images directly from web applications without any user dialogs or confirmation popups. Fully automated printing workflow for seamless integration.</div>
              <div style={{ display: 'flex', alignItems: 'center', color: '#8ab4f8', fontWeight: 500, fontSize: '16px', cursor: 'pointer', zIndex: 1 }}>Review docs <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '4px' }}><path d="M14 3h7v7" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14L21 3" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            </div>
            {/* Feature 2: Real-time WebSocket Bridge */}
            <div style={{ background: '#191919', /* no borderRadius */ padding: '40px 32px 32px 32px', position: 'relative', minHeight: '380px', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
                <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#4285f4" strokeWidth="2"/><path d="M12 8v4l3 3" stroke="#4285f4" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div style={{ color: '#9aa0a6', fontSize: '13px', letterSpacing: '1.5px', marginBottom: '8px', zIndex: 1 }}>STEP 2</div>
              <div style={{ color: '#fff', fontSize: '24px', fontWeight: 600, marginBottom: '12px', zIndex: 1 }}>Real-time WebSocket Bridge</div>
              <div style={{ color: '#9aa0a6', fontSize: '16px', marginBottom: '32px', zIndex: 1 }}>Secure WebSocket connection enables instant communication between your web application and local printers. Fast, reliable data transfer with configurable security options.</div>
              <div style={{ display: 'flex', alignItems: 'center', color: '#8ab4f8', fontWeight: 500, fontSize: '16px', cursor: 'pointer', zIndex: 1 }}>How it works <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '4px' }}><path d="M14 3h7v7" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14L21 3" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            </div>
            {/* Feature 3: Any Label Size */}
            <div style={{ background: '#191919', /* no borderRadius */ padding: '40px 32px 32px 32px', position: 'relative', minHeight: '380px', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
              <div style={{ color: '#9aa0a6', fontSize: '13px', letterSpacing: '1.5px', marginBottom: '8px', zIndex: 1 }}>STEP 3</div>
              <div style={{ color: '#fff', fontSize: '24px', fontWeight: 600, marginBottom: '12px', zIndex: 1 }}>Any Label Size</div>
              <div style={{ color: '#9aa0a6', fontSize: '16px', marginBottom: '32px', zIndex: 1 }}>Support for all label dimensions and formats. From shipping labels to product tags, business cards to receipts - Zentra handles any print job seamlessly.</div>
              <div style={{ display: 'flex', alignItems: 'center', color: '#8ab4f8', fontWeight: 500, fontSize: '16px', cursor: 'pointer', zIndex: 1 }}>Start printing <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '4px' }}><path d="M14 3h7v7" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14L21 3" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            </div>
          </div>
        </div>
      </section>
      {/* HOW IT WORKS SECTION */}
      <section style={{
        width: '100vw',
        minWidth: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        background: 'var(--bg-primary)',
        padding: '64px 0',
        boxSizing: 'border-box',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          <SectionLabel text="HOW ZENTRA WORKS" />
          <div style={{ color: '#fff', fontSize: '40px', fontWeight: 700, textAlign: 'left', marginBottom: '48px', letterSpacing: '-1.5px' }}>How Zentra Works</div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '48px', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            {/* Step 1 */}
            <div style={{ flex: 1, minWidth: '0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ color: '#8ab4f8', fontWeight: 700, fontSize: '18px', marginBottom: '8px' }}>Step 1</div>
              <div style={{ color: '#fff', fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>Install Zentra</div>
              <div style={{ color: '#e8eaed', fontSize: '16px', marginBottom: '0' }}>Download and install the Zentra native application for your OS.</div>
            </div>
            {/* Step 2 */}
            <div style={{ flex: 1, minWidth: '0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ color: '#8ab4f8', fontWeight: 700, fontSize: '18px', marginBottom: '8px' }}>Step 2</div>
              <div style={{ color: '#fff', fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>Connect Web App</div>
              <div style={{ color: '#e8eaed', fontSize: '16px', marginBottom: '0' }}>Establish a WebSocket connection from your web application to Zentra.</div>
            </div>
            {/* Step 3 */}
            <div style={{ flex: 1, minWidth: '0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ color: '#8ab4f8', fontWeight: 700, fontSize: '18px', marginBottom: '8px' }}>Step 3</div>
              <div style={{ color: '#fff', fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>Send Print Jobs</div>
              <div style={{ color: '#e8eaed', fontSize: '16px', marginBottom: '0' }}>Submit PNG images through our simple WebSocket API.</div>
            </div>
            {/* Step 4 */}
            <div style={{ flex: 1, minWidth: '0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ color: '#8ab4f8', fontWeight: 700, fontSize: '18px', marginBottom: '8px' }}>Step 4</div>
              <div style={{ color: '#fff', fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>Silent Printing</div>
              <div style={{ color: '#e8eaed', fontSize: '16px', marginBottom: '0' }}>Zentra processes and prints automatically without user interaction.</div>
            </div>
          </div>
        </div>
      </section>
      {/* USE CASES SECTION */}
      <section style={{
        width: '100vw',
        minWidth: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        background: 'var(--bg-primary)',
        padding: '48px 0',
        marginTop: '32px',
        boxSizing: 'border-box',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          <SectionLabel text="INDUSTRY APPLICATIONS" />
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ color: '#fff', fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>
              E-commerce Fulfillment
              <div style={{ color: '#9aa0a6', fontSize: '16px', fontWeight: 400, marginTop: '8px' }}>Automate shipping label printing from order management systems.</div>
            </li>
            <li style={{ color: '#fff', fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>
              Inventory Management
              <div style={{ color: '#9aa0a6', fontSize: '16px', fontWeight: 400, marginTop: '8px' }}>Print product labels and barcodes from web-based inventory systems.</div>
            </li>
            <li style={{ color: '#fff', fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>
              Point of Sale
              <div style={{ color: '#9aa0a6', fontSize: '16px', fontWeight: 400, marginTop: '8px' }}>Silent receipt and label printing from web POS applications.</div>
            </li>
            <li style={{ color: '#fff', fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>
              Healthcare
              <div style={{ color: '#9aa0a6', fontSize: '16px', fontWeight: 400, marginTop: '8px' }}>Patient wristbands and medication labels from EMR systems.</div>
            </li>
            <li style={{ color: '#fff', fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>
              Manufacturing
              <div style={{ color: '#9aa0a6', fontSize: '16px', fontWeight: 400, marginTop: '8px' }}>Quality control labels and product identification from MES systems.</div>
            </li>
            <li style={{ color: '#fff', fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>
              Logistics
              <div style={{ color: '#9aa0a6', fontSize: '16px', fontWeight: 400, marginTop: '8px' }}>Warehouse labels, shipping documents, and tracking information.</div>
            </li>
          </ul>
        </div>
      </section>
      {/* TESTIMONIALS SECTION */}
      <section style={{
        width: '100vw',
        minWidth: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        background: 'var(--bg-primary)',
        padding: '48px 0',
        boxSizing: 'border-box',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          <SectionLabel text="TESTIMONIALS" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            <div style={{ background: '#191919', border: '1px solid #3c4043', /* no borderRadius */ padding: '32px', color: '#fff', fontStyle: 'italic' }}>
            &quot;Zentra has transformed our shipping workflow. Printing is now instant and hands-free.&quot;
              <div style={{ color: '#9aa0a6', fontWeight: 500, fontSize: '15px', marginTop: '16px', fontStyle: 'normal' }}>— Operations Lead, E-commerce</div>
            </div>
            <div style={{ background: '#191919', border: '1px solid #3c4043', /* no borderRadius */ padding: '32px', color: '#fff', fontStyle: 'italic' }}>
            &quot;We integrated Zentra in a day. Our staff love the silent label printing.&quot;
              <div style={{ color: '#9aa0a6', fontWeight: 500, fontSize: '15px', marginTop: '16px', fontStyle: 'normal' }}>— IT Manager, Retail</div>
            </div>
            <div style={{ background: '#191919', border: '1px solid #3c4043', /* no borderRadius */ padding: '32px', color: '#fff', fontStyle: 'italic' }}>
            &quot;No more printer dialogs or popups. Zentra just works.&quot;
              <div style={{ color: '#9aa0a6', fontWeight: 500, fontSize: '15px', marginTop: '16px', fontStyle: 'normal' }}>— Product Owner, SaaS</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
