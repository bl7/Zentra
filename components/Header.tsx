import Link from "next/link";
import Image from "next/image";

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
        <Image src="/printbridge-white.png" alt="PrintBridge by Zentra logo" height={60} width={60} style={{ marginRight: 16, width: 'auto', height: 60 }} priority />
        PrintBridge by Zentra
      </Link>
      {/* Navigation */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
        <Link href="/features" className="nav-item" style={{ fontSize: '14px', fontWeight: 500, color: '#e8eaed', textDecoration: 'none', padding: '8px 16px', borderRadius: '4px', transition: 'background 0.2s, color 0.2s', background: 'transparent', marginRight: '4px' }}>Features</Link>
        <Link href="/documentation" className="nav-item" style={{ fontSize: '14px', fontWeight: 500, color: '#e8eaed', textDecoration: 'none', padding: '8px 16px', borderRadius: '4px', transition: 'background 0.2s, color 0.2s', background: 'transparent', marginRight: '4px' }}>Documentation</Link>
      </nav>
      {/* Outlined Download Now Button */}
      <Link href="/contact" style={{
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
       
        <span style={{ color: '#444', fontWeight: 500, fontSize: '14px', fontFamily: 'var(--font-family)' }}>Contact Us</span>
      </Link>
    </header>
  );
} 