import React from "react";

export default function SectionLabel({ text }: { text: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px', width: '100%', fontFamily: 'var(--font-mono, monospace)', color: '#5f6368', fontSize: '13px', fontWeight: 400, letterSpacing: '1.5px' }}>
      <span style={{ whiteSpace: 'nowrap', opacity: 0.8 }}>{`<!-- ${text} `}</span>
      <span style={{ flex: 1, borderBottom: '1px dashed #444', height: 0, opacity: 0.7, margin: '0 4px' }}></span>
      <span style={{ whiteSpace: 'nowrap', opacity: 0.8 }}>{'-->'}</span>
    </div>
  );
} 