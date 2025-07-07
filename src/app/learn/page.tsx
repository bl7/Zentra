import Link from "next/link";

export default function Learn() {
  return (
    <main style={{ background: 'var(--bg-primary)', minHeight: '100vh', fontFamily: 'var(--font-family)' }}>
      {/* HERO GRID */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '48px',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '64px 32px 32px 32px',
        position: 'relative',
      }}>
        {/* Left: Welcome + Overview */}
        <div>
          <div style={{ fontSize: '48px', fontWeight: 700, color: '#fff', marginBottom: '24px', letterSpacing: '-1.5px' }}>Welcome to Zentra University</div>
          <div style={{ color: '#e8eaed', fontSize: '18px', marginBottom: '24px', lineHeight: 1.5 }}>
            Here you’ll find all you need to sharpen your Zentra integration skills, whether you’re a new user or an advanced developer.
          </div>
          <input type="text" placeholder="Search Zentra University..." style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: '8px',
            border: '1px solid #3c4043',
            background: '#2d2d2d',
            color: '#e8eaed',
            fontSize: '16px',
            outline: 'none',
            marginBottom: '16px',
          }} />
        </div>
        {/* Right: Geometric SVG */}
        <div style={{ position: 'relative', minHeight: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="320" height="220" viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
            <rect x="0" y="0" width="320" height="220" fill="#232323" />
            <rect x="40" y="40" width="180" height="140" rx="32" fill="#4285f4" fillOpacity="0.06" />
            <circle cx="160" cy="110" r="60" fill="#3c4043" fillOpacity="0.18" />
            <rect x="100" y="80" width="80" height="60" rx="16" fill="#ea4335" fillOpacity="0.08" />
            <circle cx="240" cy="60" r="18" fill="#fbbc04" fillOpacity="0.8" />
            <circle cx="60" cy="180" r="12" fill="#34a853" fillOpacity="0.7" />
            <rect x="200" y="160" width="32" height="12" rx="6" fill="#4285f4" fillOpacity="0.12" />
          </svg>
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="22" stroke="#fff" strokeWidth="3"/><circle cx="30" cy="30" r="8" fill="#4285f4"/><text x="30" y="35" textAnchor="middle" fontSize="18" fill="#fff" fontWeight="bold">i</text></svg>
          </div>
        </div>
      </section>
      {/* Tabbed Navigation (static for now) */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px', marginTop: '16px', borderBottom: '1px solid #3c4043', display: 'flex', gap: '32px' }}>
        <div style={{ color: '#fff', fontWeight: 500, fontSize: '16px', padding: '16px 0', borderBottom: '2px solid #4285f4' }}>Overview</div>
        <div style={{ color: '#9aa0a6', fontWeight: 500, fontSize: '16px', padding: '16px 0', cursor: 'pointer' }}>Improving Your Integrations</div>
        <div style={{ color: '#9aa0a6', fontWeight: 500, fontSize: '16px', padding: '16px 0', cursor: 'pointer' }}>Invalid Setups</div>
        <div style={{ color: '#9aa0a6', fontWeight: 500, fontSize: '16px', padding: '16px 0', cursor: 'pointer' }}>Presentations</div>
        <div style={{ color: '#9aa0a6', fontWeight: 500, fontSize: '16px', padding: '16px 0', cursor: 'pointer' }}>Videos</div>
      </section>
      {/* Target Recommendations */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', alignItems: 'flex-start' }}>
        <div style={{ background: '#1a1a1a', border: '1px solid #3c4043', borderRadius: '16px', padding: '32px', color: '#fff' }}>
          <div style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>E-commerce Integration</div>
          <div style={{ color: '#9aa0a6', fontSize: '16px', marginBottom: '16px' }}>Automate shipping label printing from order management systems.</div>
          <Link href="/documentation" style={{ color: '#4285f4', fontSize: '16px', fontWeight: 500, textDecoration: 'none' }}>Learn More</Link>
        </div>
        <div style={{ background: '#1a1a1a', border: '1px solid #3c4043', borderRadius: '16px', padding: '32px', color: '#fff' }}>
          <div style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>Inventory Management</div>
          <div style={{ color: '#9aa0a6', fontSize: '16px', marginBottom: '16px' }}>Print product labels and barcodes from web-based inventory systems.</div>
          <Link href="/documentation" style={{ color: '#4285f4', fontSize: '16px', fontWeight: 500, textDecoration: 'none' }}>Learn More</Link>
        </div>
        <div style={{ background: '#1a1a1a', border: '1px solid #3c4043', borderRadius: '16px', padding: '32px', color: '#fff' }}>
          <div style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>Point of Sale</div>
          <div style={{ color: '#9aa0a6', fontSize: '16px', marginBottom: '16px' }}>Silent receipt and label printing from web POS applications.</div>
          <Link href="/documentation" style={{ color: '#4285f4', fontSize: '16px', fontWeight: 500, textDecoration: 'none' }}>Learn More</Link>
        </div>
      </section>
      {/* Reporting Tips & Presentations */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '48px', alignItems: 'flex-start' }}>
        <div>
          <div style={{ color: '#fff', fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>Master your Zentra integration</div>
          <div style={{ color: '#9aa0a6', fontSize: '16px', marginBottom: '24px' }}>Reports that clearly and concisely identify the integration scenario, affected component, and a well-developed workflow are more likely to be prioritized and supported.</div>
          <Link href="/documentation" style={{ display: 'inline-block', border: '1px solid var(--border-color)', color: '#e8eaed', background: 'transparent', borderRadius: '4px', padding: '10px 24px', fontSize: '16px', fontWeight: 500, textDecoration: 'none', transition: 'background 0.2s, color 0.2s, border 0.2s' }}>Review guidance</Link>
        </div>
        <div>
          <div style={{ color: '#fff', fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>Our team&apos;s ideas on what to automate</div>
          <Link href="/learn" style={{ color: '#4285f4', fontSize: '16px', fontWeight: 500, textDecoration: 'none' }}>Explore now</Link>
        </div>
      </section>
      {/* Invalid/Rewarded Reports */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'flex-start' }}>
        <div>
          <div style={{ color: '#fff', fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>Invalid Setups</div>
          <div style={{ color: '#9aa0a6', fontSize: '16px', marginBottom: '16px' }}>See the most common non-qualifying integration types and how to avoid them.</div>
          <Link href="/documentation" style={{ display: 'inline-block', border: '1px solid var(--border-color)', color: '#e8eaed', background: 'transparent', borderRadius: '4px', padding: '10px 24px', fontSize: '16px', fontWeight: 500, textDecoration: 'none', transition: 'background 0.2s, color 0.2s, border 0.2s' }}>View All</Link>
        </div>
        <div>
          <div style={{ color: '#fff', fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>Rewarded Integrations</div>
          <div style={{ color: '#9aa0a6', fontSize: '16px', marginBottom: '16px' }}>Explore successful Zentra integrations and see what makes them stand out.</div>
          <Link href="/documentation" style={{ display: 'inline-block', border: '1px solid var(--border-color)', color: '#e8eaed', background: 'transparent', borderRadius: '4px', padding: '10px 24px', fontSize: '16px', fontWeight: 500, textDecoration: 'none', transition: 'background 0.2s, color 0.2s, border 0.2s' }}>View All Integrations</Link>
        </div>
      </section>
      {/* Callout: Report/Presentations */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px', marginTop: '32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'flex-start' }}>
        <div>
          <div style={{ color: '#fff', fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>Found something? Share your integration</div>
          <Link href="/support" style={{ display: 'inline-block', border: '1px solid var(--border-color)', color: '#e8eaed', background: 'transparent', borderRadius: '4px', padding: '10px 24px', fontSize: '16px', fontWeight: 500, textDecoration: 'none', transition: 'background 0.2s, color 0.2s, border 0.2s' }}>Create a Report</Link>
        </div>
        <div>
          <div style={{ color: '#fff', fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>Pick up tips and tricks from the Zentra team</div>
          <Link href="/learn" style={{ display: 'inline-block', border: '1px solid var(--border-color)', color: '#e8eaed', background: 'transparent', borderRadius: '4px', padding: '10px 24px', fontSize: '16px', fontWeight: 500, textDecoration: 'none', transition: 'background 0.2s, color 0.2s, border 0.2s' }}>Learn More</Link>
        </div>
      </section>
    </main>
  );
} 