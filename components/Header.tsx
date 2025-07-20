import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        height: '64px',
        background: 'var(--bg-primary)',
        borderBottom: '1px solid #3c4043',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
        fontFamily: 'var(--font-family)',
      }}
    >
      {/* Logo */}
      <Link href="/" className="logo" style={{
        fontSize: '20px',
        fontWeight: 600,
        color: '#fff',
        textDecoration: 'none',
        marginRight: '32px',
        letterSpacing: '-0.5px',
        display: 'flex',
        alignItems: 'center',
      }}>
        <img src="/printbridge-white.png" alt="PrintBridge by Zentra logo" style={{ height: 32, marginRight: 12 }} />
        PrintBridge by Zentra
      </Link>
      {/* Navigation */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
        <Link href="/features" className="nav-item" style={{ fontSize: '14px', fontWeight: 500, color: '#e8eaed', textDecoration: 'none', padding: '8px 16px', borderRadius: '4px', transition: 'background 0.2s, color 0.2s', background: 'transparent', marginRight: '4px' }}>Features</Link>
        <Link href="/documentation" className="nav-item" style={{ fontSize: '14px', fontWeight: 500, color: '#e8eaed', textDecoration: 'none', padding: '8px 16px', borderRadius: '4px', transition: 'background 0.2s, color 0.2s', background: 'transparent', marginRight: '4px' }}>Documentation</Link>
      </nav>
      {/* Outlined Download Now Button */}
      <Link href="/auth/google" style={{
        marginLeft: '32px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '7px 18px 7px 14px',
        borderRadius: '4px',
        border: '1.5px solid #e8eaed',
        background: '#fff',
        color: '#444',
        fontSize: '14px',
        fontWeight: 500,
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        transition: 'box-shadow 0.2s, border 0.2s',
        outline: 'none',
        boxShadow: '0 1px 2px rgba(60,64,67,0.08)',
      }}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M17.64 9.2045C17.64 8.5665 17.5827 7.95225 17.4764 7.3635H9V10.845H13.8436C13.635 11.97 12.9645 12.915 12.009 13.5555V15.555H14.8236C16.3882 14.139 17.64 11.9273 17.64 9.2045Z" fill="#4285F4"/>
            <path d="M9 18C11.43 18 13.44 17.1795 14.8236 15.555L12.009 13.5555C11.265 14.055 10.245 14.355 9 14.355C6.6555 14.355 4.6785 12.735 3.9645 10.635H1.0515V12.705C2.427 15.6555 5.4555 18 9 18Z" fill="#34A853"/>
            <path d="M3.9645 10.635C3.7845 10.1355 3.681 9.594 3.681 9C3.681 8.406 3.7845 7.8645 3.9645 7.365V5.295H1.0515C0.3825 6.609 0 8.25 0 9C0 9.75 0.3825 11.391 1.0515 12.705L3.9645 10.635Z" fill="#FBBC05"/>
            <path d="M9 3.645C10.305 3.645 11.385 4.095 12.1845 4.845L14.883 2.145C13.44 0.8025 11.43 0 9 0C5.4555 0 2.427 2.3445 1.0515 5.295L3.9645 7.365C4.6785 5.265 6.6555 3.645 9 3.645Z" fill="#EA4335"/>
          </g>
        </svg>
        <span style={{ color: '#444', fontWeight: 500, fontSize: '14px', fontFamily: 'var(--font-family)' }}>Sign in</span>
      </Link>
    </header>
  );
} 