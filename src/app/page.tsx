export default function Home() {
  return (
    <main>
      <h1>Zentra</h1>
      <p style={{ fontSize: '1.25rem', maxWidth: 500 }}>
        Pixel-perfect, modern, product-level UI/UX for your Next.js projects.
      </p>
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <a href="#features" style={{
          background: '#111', color: '#fff', padding: '0.75em 1.5em', borderRadius: 8, textDecoration: 'none', fontWeight: 600
        }}>Features</a>
        <a href="#documentation" style={{
          background: '#f3f3f3', color: '#111', padding: '0.75em 1.5em', borderRadius: 8, textDecoration: 'none', fontWeight: 600
        }}>Documentation</a>
      </div>
    </main>
  );
} 