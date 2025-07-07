import { useState, useEffect } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 600);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

function ApiSvg() {
  return (
    <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', margin: '0 auto 1rem' }}>
      <rect x="10" y="20" width="80" height="20" rx="6" fill="#111" />
      <rect x="20" y="28" width="60" height="4" rx="2" fill="#fff" />
      <circle cx="20" cy="30" r="3" fill="#4ADE80" />
      <circle cx="80" cy="30" r="3" fill="#F59E42" />
    </svg>
  );
}

export default function Documentation() {
  const [tab, setTab] = useState<'windows' | 'macos'>('windows');
  const isMobile = useIsMobile();
  return (
    <main>
      <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <ApiSvg />
        <h1>Documentation</h1>
        <p style={{ fontSize: '1.1rem', maxWidth: 500, margin: '0 auto' }}>
          Integration guides and API reference for Zentra.
        </p>
      </section>
      <nav
        role="tablist"
        aria-label="OS Tabs"
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '0.5rem' : '1rem',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}
      >
        <button
          role="tab"
          aria-selected={tab === 'windows'}
          aria-controls="tabpanel-windows"
          tabIndex={tab === 'windows' ? 0 : -1}
          onClick={() => setTab('windows')}
          style={{
            padding: isMobile ? '0.75em 0' : '0.5em 1.5em',
            borderRadius: 8,
            border: 'none',
            background: tab === 'windows' ? '#111' : '#f3f3f3',
            color: tab === 'windows' ? '#fff' : '#111',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'background 0.2s',
            width: isMobile ? '100%' : undefined,
          }}
        >
          Windows
        </button>
        <button
          role="tab"
          aria-selected={tab === 'macos'}
          aria-controls="tabpanel-macos"
          tabIndex={tab === 'macos' ? 0 : -1}
          onClick={() => setTab('macos')}
          style={{
            padding: isMobile ? '0.75em 0' : '0.5em 1.5em',
            borderRadius: 8,
            border: 'none',
            background: tab === 'macos' ? '#111' : '#f3f3f3',
            color: tab === 'macos' ? '#fff' : '#111',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'background 0.2s',
            width: isMobile ? '100%' : undefined,
          }}
        >
          macOS
        </button>
      </nav>
      <section>
        {tab === 'windows' ? (
          <article
            id="tabpanel-windows"
            style={{
              background: '#f9f9f9',
              borderRadius: 10,
              padding: isMobile ? '1rem' : '1.5rem',
              boxShadow: '0 2px 8px #0001',
              maxWidth: 600,
              margin: '0 auto',
              fontSize: isMobile ? '1rem' : undefined,
            }}
          >
            <h2 style={{ fontSize: isMobile ? '1.1rem' : '1.25rem' }}>Windows WebSocket Integration</h2>
            <p>Follow these steps to connect to Zentra API using WebSockets on Windows:</p>
            <ol style={{ paddingLeft: '1.2em' }}>
              <li>Install <code>websocat</code> or use your preferred WebSocket client.</li>
              <li>Open Command Prompt and run:<br />
                <code style={{ display: 'block', background: '#eee', padding: '0.5em', borderRadius: 6, margin: '0.5em 0' }}>
                  websocat ws://localhost:8080/api/ws
                </code>
              </li>
              <li>Send and receive messages in real time.</li>
            </ol>
          </article>
        ) : (
          <article
            id="tabpanel-macos"
            style={{
              background: '#f9f9f9',
              borderRadius: 10,
              padding: isMobile ? '1rem' : '1.5rem',
              boxShadow: '0 2px 8px #0001',
              maxWidth: 600,
              margin: '0 auto',
              textAlign: 'center',
              fontSize: isMobile ? '1rem' : undefined,
            }}
          >
            <h2 style={{ fontSize: isMobile ? '1.1rem' : '1.25rem' }}>macOS Guide Coming Soon</h2>
            <p>Stay tuned for the macOS integration guide.</p>
          </article>
        )}
      </section>
    </main>
  );
} 