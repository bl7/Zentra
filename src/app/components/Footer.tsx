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
      <span style={{ margin: '0 16px', color: 'var(--text-muted)' }}>Zentra</span>
      <span style={{ margin: '0 8px', color: 'var(--text-muted)' }}>|</span>
      <Link href="/legal/privacy" style={{ margin: '0 8px', color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy</Link>
      <span style={{ margin: '0 8px', color: 'var(--text-muted)' }}>|</span>
      <Link href="/legal/terms" style={{ margin: '0 8px', color: 'var(--text-muted)', textDecoration: 'none' }}>Terms</Link>
      <span style={{ margin: '0 8px', color: 'var(--text-muted)' }}>|</span>
      <Link href="/about" style={{ margin: '0 8px', color: 'var(--text-muted)', textDecoration: 'none' }}>About</Link>
      <span style={{ margin: '0 8px', color: 'var(--text-muted)' }}>|</span>
      <Link href="/support" style={{ margin: '0 8px', color: 'var(--text-muted)', textDecoration: 'none' }}>Help</Link>
    </footer>
  );
} 