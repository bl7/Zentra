import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-primary)',
      borderTop: '1px solid #3c4043',
      padding: '0',
      height: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      color: 'var(--text-muted)',
      width: '100%',
    }}>
      <Image src="/printbridge-white.png" alt="PrintBridge by Zentra logo" height={32} width={32} style={{ marginRight: 8, width: 'auto', height: 32 }} />
      <span style={{ margin: '0 8px', color: 'var(--text-muted)' }}>PrintBridge by Zentra</span>
      <span style={{ margin: '0 8px', color: 'var(--text-muted)' }}>|</span>
      <Link href="/" style={{ margin: '0 8px', color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy</Link>
      <span style={{ margin: '0 8px', color: 'var(--text-muted)' }}>|</span>
      <Link href="/" style={{ margin: '0 8px', color: 'var(--text-muted)', textDecoration: 'none' }}>Terms</Link>
      <span style={{ margin: '0 8px', color: 'var(--text-muted)' }}>|</span>
      <Link href="/" style={{ margin: '0 8px', color: 'var(--text-muted)', textDecoration: 'none' }}>About</Link>
      <span style={{ margin: '0 8px', color: 'var(--text-muted)' }}>|</span>
      <Link href="/" style={{ margin: '0 8px', color: 'var(--text-muted)', textDecoration: 'none' }}>Help</Link>
    </footer>
  );
} 