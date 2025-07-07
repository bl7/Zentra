import { useEffect, useState } from "react";

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

export default function Features() {
  const isMobile = useIsMobile();
  return (
    <main>
      <section style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1>Features</h1>
        <p style={{ fontSize: '1.15rem', maxWidth: 500, margin: '0 auto' }}>
          Zentra offers a suite of modern, pixel-perfect UI/UX features for your Next.js projects.
        </p>
      </section>
      <section
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          flexWrap: 'wrap',
          gap: isMobile ? '1rem' : '1.5rem',
          justifyContent: 'center',
          alignItems: isMobile ? 'stretch' : 'center',
        }}
      >
        <div
          style={{
            flex: '1 1 250px',
            minWidth: 220,
            background: '#f3f3f3',
            borderRadius: 12,
            padding: isMobile ? '1rem' : '1.5rem',
            boxShadow: '0 2px 8px #0001',
            marginBottom: isMobile ? 0 : '1rem',
            fontSize: isMobile ? '1rem' : undefined,
          }}
        >
          <h2 style={{ fontSize: isMobile ? '1.1rem' : '1.25rem' }}>Pixel-Perfect Design</h2>
          <p>Every component is crafted for sharpness and clarity on all screens.</p>
        </div>
        <div
          style={{
            flex: '1 1 250px',
            minWidth: 220,
            background: '#f3f3f3',
            borderRadius: 12,
            padding: isMobile ? '1rem' : '1.5rem',
            boxShadow: '0 2px 8px #0001',
            marginBottom: isMobile ? 0 : '1rem',
            fontSize: isMobile ? '1rem' : undefined,
          }}
        >
          <h2 style={{ fontSize: isMobile ? '1.1rem' : '1.25rem' }}>Modern UI/UX</h2>
          <p>Intuitive layouts, smooth interactions, and delightful micro-animations.</p>
        </div>
        <div
          style={{
            flex: '1 1 250px',
            minWidth: 220,
            background: '#f3f3f3',
            borderRadius: 12,
            padding: isMobile ? '1rem' : '1.5rem',
            boxShadow: '0 2px 8px #0001',
            marginBottom: isMobile ? 0 : '1rem',
            fontSize: isMobile ? '1rem' : undefined,
          }}
        >
          <h2 style={{ fontSize: isMobile ? '1.1rem' : '1.25rem' }}>Responsive by Default</h2>
          <p>Looks great on every device, from mobile to desktop.</p>
        </div>
      </section>
    </main>
  );
} 