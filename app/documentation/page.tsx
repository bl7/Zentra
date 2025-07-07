'use client'
import SectionLabel from "../../components/SectionLabel";
import React, { useState } from "react";

export default function Documentation() {
  const [platform, setPlatform] = useState<'windows' | 'mac'>('windows');

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
              <SectionLabel text="DOCUMENTATION" />
              <div style={{ fontSize: '64px', fontWeight: 300, color: '#fff', marginBottom: '40px', letterSpacing: '-1.5px', lineHeight: 1.1, fontFamily: 'var(--font-family)', width: 'fit-content' }}>Zentra Documentation</div>
            </div>
            {/* Subheading with left border */}
            <div style={{ color: '#9aa0a6', fontSize: '19px', marginBottom: '0', maxWidth: '600px', borderLeft: '3px solid #444', paddingLeft: '20px', fontWeight: 400, minHeight: '64px', display: 'flex', alignItems: 'center', lineHeight: 1.6 }}>
              Everything you need to integrate, deploy, and master Zentra. Explore guides, API docs, and best practices for seamless printing from your web apps.
            </div>
          </div>
          {/* Right: Hero SVG for Documentation */}
          <div style={{ position: 'relative', minHeight: '420px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', marginTop: '-40px' }}>
            <svg width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 1 }}>
              {/* Grid - bigger squares */}
              <g stroke="#444" strokeDasharray="4 4" opacity="0.5">
                {Array.from({ length: 7 }).map((_, i) => (
                  <line key={i} x1={60 * i} y1={0} x2={60 * i} y2={420} />
                ))}
                {Array.from({ length: 7 }).map((_, i) => (
                  <line key={i+20} x1={0} y1={60 * i} x2={420} y2={60 * i} />
                ))}
              </g>
              {/* Docs window */}
              <rect x="70" y="80" width="280" height="180" rx="0" fill="#232323" stroke="#fff" strokeWidth="2" />
              {/* Tabs */}
              <circle cx="90" cy="100" r="7" fill="#4285f4" />
              <circle cx="110" cy="100" r="7" fill="#fbbc04" />
              <circle cx="130" cy="100" r="7" fill="#34a853" />
              {/* API Endpoint lines */}
              <rect x="100" y="130" width="220" height="100" rx="8" fill="#181818" stroke="#333" strokeWidth="1.5" />
              {/* Endpoint rows */}
              <circle cx="120" cy="155" r="5" fill="#4285f4" />
              <rect x="135" y="148" width="120" height="14" rx="3" fill="#222" />
              <text x="140" y="159" fontSize="13" fill="#8ab4f8">GET /api/labels</text>
              <circle cx="120" cy="185" r="5" fill="#fbbc04" />
              <rect x="135" y="178" width="120" height="14" rx="3" fill="#222" />
              <text x="140" y="189" fontSize="13" fill="#fbbc04">POST /api/print</text>
              <circle cx="120" cy="215" r="5" fill="#34a853" />
              <rect x="135" y="208" width="120" height="14" rx="3" fill="#222" />
              <text x="140" y="219" fontSize="13" fill="#34a853">WS /ws/print</text>
              {/* Curly brace for code block */}
              <text x="95" y="140" fontSize="32" fill="#fff" opacity="0.18">{'{'}</text>
              <text x="95" y="245" fontSize="32" fill="#fff" opacity="0.18">{'}'}</text>
              {/* REST icon (cloud with arrows) */}
              <g opacity="0.18">
                <ellipse cx="320" cy="220" rx="22" ry="14" fill="#4285f4" />
                <path d="M310 220 l10 8 l10 -8" stroke="#fff" strokeWidth="2" fill="none" />
                <path d="M320 220 v-10" stroke="#fff" strokeWidth="2" />
              </g>
              {/* Accent circle */}
              <circle cx="340" cy="340" r="18" fill="#4285f4" fillOpacity="0.18" />
              {/* Accent line */}
              <line x1="320" y1="100" x2="400" y2="180" stroke="#ea4335" strokeWidth="3" opacity="0.7" />
            </svg>
          </div>
        </div>
      </section>
      {/* SUB-HEADER TABS */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0',
        borderBottom: '1.5px solid #232323',
        background: 'var(--bg-primary)',
        margin: '0 auto',
        maxWidth: '1200px',
        padding: '0 32px',
        height: '54px',
      }}>
        <button
          onClick={() => setPlatform('windows')}
          style={{
            background: 'none',
            border: 'none',
            color: platform === 'windows' ? '#fff' : '#9aa0a6',
            fontWeight: 600,
            fontSize: '17px',
            padding: '0 32px',
            height: '54px',
            borderBottom: platform === 'windows' ? '3px solid #4285f4' : '3px solid transparent',
            cursor: 'pointer',
            outline: 'none',
            transition: 'color 0.2s, border 0.2s',
            letterSpacing: '0.01em',
          }}
        >
          Windows
        </button>
        <button
          onClick={() => setPlatform('mac')}
          style={{
            background: 'none',
            border: 'none',
            color: platform === 'mac' ? '#fff' : '#9aa0a6',
            fontWeight: 600,
            fontSize: '17px',
            padding: '0 32px',
            height: '54px',
            borderBottom: platform === 'mac' ? '3px solid #4285f4' : '3px solid transparent',
            cursor: 'pointer',
            outline: 'none',
            transition: 'color 0.2s, border 0.2s',
            letterSpacing: '0.01em',
          }}
        >
          macOS
        </button>
      </nav>
      {/* PLATFORM-SPECIFIC DOCS */}
      {platform === 'windows' && (
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 0 32px 0', color: '#e8eaed' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '16px', color: '#fff', letterSpacing: '-1px' }}>Next.js WebSocket Integration Guide for PrintBridge Server (Windows)</h2>
          <div style={{ color: '#9aa0a6', fontSize: '18px', marginBottom: '32px', lineHeight: 1.7 }}>
            This guide shows how to connect your Next.js webapp to the PrintBridge WebSocket server for automatic printer discovery and label printing.
          </div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginTop: '32px', color: '#fff' }}>Prerequisites</h3>
          <ul style={{ marginBottom: '32px', marginLeft: '24px' }}>
            <li>PrintBridge server running on <b>localhost:8080</b></li>
            <li>Next.js project set up</li>
            <li>WebSocket support enabled</li>
          </ul>
          <ol style={{ counterReset: 'step', paddingLeft: '0', margin: 0 }}>
            <li style={{ marginBottom: '40px', listStyle: 'none' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#8ab4f8', marginBottom: '8px' }}>1. Create a WebSocket Hook (Recommended)</h3>
              <div style={{ marginBottom: '8px' }}>Create file: <b>hooks/usePrintBridge.ts</b></div>
              <pre style={{ background: '#181818', color: '#e8eaed', padding: '18px', borderRadius: '6px', overflowX: 'auto', marginBottom: '0', fontSize: '15px', border: '1px solid #333' }}><code>{`import { useState, useEffect, useRef } from 'react';

interface PrintBridgeMessage {
  type?: string;
  status?: string;
  message?: string;
  printers?: string[];
  defaultPrinter?: string;
  success?: boolean;
  printerName?: string;
  errorMessage?: string;
}

export const usePrintBridge = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [printers, setPrinters] = useState<string[]>([]);
  const [defaultPrinter, setDefaultPrinter] = useState<string>('');
  const [lastPrintResult, setLastPrintResult] = useState<any>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout>();

  const connect = () => {
    try {
      const ws = new WebSocket('ws://localhost:8080/ws');
      wsRef.current = ws;

      ws.onopen = () => {
        console.log('✅ Connected to PrintBridge server');
        setIsConnected(true);
      };

      ws.onmessage = (event) => {
        try {
          const data: PrintBridgeMessage = JSON.parse(event.data);
          console.log('📨 Received:', data);

          if (data.type === 'connection') {
            setPrinters(data.printers || []);
            setDefaultPrinter(data.defaultPrinter || '');
            console.log('🖨️ Printers discovered:', data.printers);
          }

          if (data.success !== undefined) {
            setLastPrintResult(data);
            console.log('🖨️ Print job result:', data);
          }
        } catch (error) {
          console.error('❌ Error parsing message:', error);
        }
      };

      ws.onclose = () => {
        console.log('🔌 Disconnected from PrintBridge');
        setIsConnected(false);
        setPrinters([]);
        setDefaultPrinter('');
        
        // Auto-reconnect after 3 seconds
        reconnectTimeoutRef.current = setTimeout(connect, 3000);
      };

      ws.onerror = (error) => {
        console.error('❌ WebSocket error:', error);
        setIsConnected(false);
      };
    } catch (error) {
      console.error('❌ Connection error:', error);
      setIsConnected(false);
    }
  };

  const disconnect = () => {
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
    }
    if (wsRef.current) {
      wsRef.current.close();
    }
  };

  const sendPrintJob = (base64Image: string, printerName?: string) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      console.log('🖨️ Sending print job...');
      wsRef.current.send(base64Image);
      return true;
    } else {
      console.error('❌ WebSocket not connected');
      return false;
    }
  };

  useEffect(() => {
    connect();
    return () => disconnect();
  }, []);

  return {
    isConnected,
    printers,
    defaultPrinter,
    lastPrintResult,
    sendPrintJob,
    connect,
    disconnect
  };
};`}</code></pre>
            </li>
            <li style={{ marginBottom: '40px', listStyle: 'none' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#8ab4f8', marginBottom: '8px' }}>2. Create a PrintBridge Provider (Context)</h3>
              <div style={{ marginBottom: '8px' }}>Create file: <b>contexts/PrintBridgeContext.tsx</b></div>
              <pre style={{ background: '#181818', color: '#e8eaed', padding: '18px', borderRadius: '6px', overflowX: 'auto', marginBottom: '0', fontSize: '15px', border: '1px solid #333' }}><code>{`import React, { createContext, useContext, ReactNode } from 'react';
import { usePrintBridge } from '../hooks/usePrintBridge';

interface PrintBridgeContextType {
  isConnected: boolean;
  printers: string[];
  defaultPrinter: string;
  lastPrintResult: any;
  sendPrintJob: (base64Image: string, printerName?: string) => boolean;
}

const PrintBridgeContext = createContext<PrintBridgeContextType | undefined>(undefined);

export const PrintBridgeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const printBridge = usePrintBridge();

  return (
    <PrintBridgeContext.Provider value={printBridge}>
      {children}
    </PrintBridgeContext.Provider>
  );
};

export const usePrintBridgeContext = () => {
  const context = useContext(PrintBridgeContext);
  if (context === undefined) {
    throw new Error('usePrintBridgeContext must be used within a PrintBridgeProvider');
  }
  return context;
};`}</code></pre>
            </li>
            <li style={{ marginBottom: '40px', listStyle: 'none' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#8ab4f8', marginBottom: '8px' }}>3. Wrap Your App with the Provider</h3>
              <div style={{ marginBottom: '8px' }}>Update file: <b>pages/_app.tsx</b> (Pages Router) or <b>app/layout.tsx</b> (App Router)</div>
              <div style={{ marginBottom: '8px' }}>For Pages Router:</div>
              <pre style={{ background: '#181818', color: '#e8eaed', padding: '18px', borderRadius: '6px', overflowX: 'auto', marginBottom: '0', fontSize: '15px', border: '1px solid #333' }}><code>{`import { PrintBridgeProvider } from '../contexts/PrintBridgeContext';

function MyApp({ Component, pageProps }) {
  return (
    <PrintBridgeProvider>
      <Component {...pageProps} />
    </PrintBridgeProvider>
  );
}

export default MyApp;`}</code></pre>
              <div style={{ marginBottom: '8px' }}>For App Router:</div>
              <pre style={{ background: '#181818', color: '#e8eaed', padding: '18px', borderRadius: '6px', overflowX: 'auto', marginBottom: '0', fontSize: '15px', border: '1px solid #333' }}><code>{`import { PrintBridgeProvider } from '../contexts/PrintBridgeContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <PrintBridgeProvider>
          {children}
        </PrintBridgeProvider>
      </body>
    </html>
  );
}`}</code></pre>
            </li>
            <li style={{ marginBottom: '40px', listStyle: 'none' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#8ab4f8', marginBottom: '8px' }}>4. Create a Print Button Component</h3>
              <div style={{ marginBottom: '8px' }}>Create file: <b>components/PrintButton.tsx</b></div>
              <pre style={{ background: '#181818', color: '#e8eaed', padding: '18px', borderRadius: '6px', overflowX: 'auto', marginBottom: '0', fontSize: '15px', border: '1px solid #333' }}><code>{`import { usePrintBridgeContext } from '../contexts/PrintBridgeContext';

export const PrintButton: React.FC = () => {
  const { isConnected, printers, defaultPrinter, sendPrintJob } = usePrintBridgeContext();

  const handlePrint = async () => {
    // Convert your image to base64
    const base64Image = 'your-base64-image-string';
    
    if (sendPrintJob(base64Image, defaultPrinter)) {
      console.log('✅ Print job sent successfully');
    } else {
      console.error('❌ Failed to send print job');
    }
  };

  return (
    <div>
      <div>Status: {isConnected ? '🟢 Connected' : '🔴 Disconnected'}</div>
      <div>Available Printers: {printers.join(', ')}</div>
      <div>Default Printer: {defaultPrinter}</div>
      <button 
        onClick={handlePrint}
        disabled={!isConnected}
      >
        Print Label
      </button>
    </div>
  );
};`}</code></pre>
            </li>
            <li style={{ marginBottom: '40px', listStyle: 'none' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#8ab4f8', marginBottom: '8px' }}>5. Create a Connection Status Component</h3>
              <div style={{ marginBottom: '8px' }}>Create file: <b>components/ConnectionStatus.tsx</b></div>
              <pre style={{ background: '#181818', color: '#e8eaed', padding: '18px', borderRadius: '6px', overflowX: 'auto', marginBottom: '0', fontSize: '15px', border: '1px solid #333' }}><code>{`import { usePrintBridgeContext } from '../contexts/PrintBridgeContext';

export const ConnectionStatus = () => {
  const {'{'} isConnected, printers {'}'} = usePrintBridgeContext();
  return (
    <div className={"status " + (isConnected ? 'connected' : 'disconnected')}>
      <div>🖨️ PrintBridge: {'{'}isConnected ? &quot;Connected&quot; : &quot;Disconnected&quot;{'}'}</div>
      {'{'}isConnected && (
        <div>🖨️ Available Printers: {'{'}printers.length{'}'}</div>
      ){'}'}
    </div>
  );
};`}</code></pre>
            </li>
            <li style={{ marginBottom: '40px', listStyle: 'none' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#8ab4f8', marginBottom: '8px' }}>6. Add to Your Page</h3>
              <div style={{ marginBottom: '8px' }}>Update file: <b>pages/index.tsx</b> (Pages Router) or <b>app/page.tsx</b> (App Router)</div>
              <pre style={{ background: '#181818', color: '#e8eaed', padding: '18px', borderRadius: '6px', overflowX: 'auto', marginBottom: '0', fontSize: '15px', border: '1px solid #333' }}><code>{`import { ConnectionStatus } from '../components/ConnectionStatus';
import { PrintButton } from '../components/PrintButton';

export default function Home() {
  return (
    <div>
      <h1>My Label Printing App</h1>
      <ConnectionStatus />
      <PrintButton />
    </div>
  );
}`}</code></pre>
            </li>
            <li style={{ marginBottom: '40px', listStyle: 'none' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#8ab4f8', marginBottom: '8px' }}>7. Add CSS Styles (Optional)</h3>
              <div style={{ marginBottom: '8px' }}>Add to your global CSS or component styles:</div>
              <pre style={{ background: '#181818', color: '#e8eaed', padding: '18px', borderRadius: '6px', overflowX: 'auto', marginBottom: '0', fontSize: '15px', border: '1px solid #333' }}><code>{`.status {
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
}

.status.connected {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.status.disconnected {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

button {
  padding: 8px 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}

button:disabled {
  background: #6c757d;
  cursor: not-allowed;
}`}</code></pre>
            </li>
            <li style={{ marginBottom: '40px', listStyle: 'none' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#8ab4f8', marginBottom: '8px' }}>8. Installation Steps</h3>
              <ol style={{ marginLeft: '24px', marginBottom: '0' }}>
                <li>Create the files above in your Next.js project structure</li>
                <li>Wrap your app with PrintBridgeProvider in _app.tsx or layout.tsx</li>
                <li>Use the hook in your components</li>
                <li>Start your PrintBridge server:
                  <pre style={{ background: '#181818', color: '#e8eaed', padding: '10px', borderRadius: '6px', overflowX: 'auto', display: 'inline-block', fontSize: '15px', border: '1px solid #333', margin: '8px 0' }}><code>{`cd PrintBridgeTrayApp
dotnet run`}</code></pre>
                </li>
                <li>Start your Next.js app:
                  <pre style={{ background: '#181818', color: '#e8eaed', padding: '10px', borderRadius: '6px', overflowX: 'auto', display: 'inline-block', fontSize: '15px', border: '1px solid #333', margin: '8px 0' }}><code>{`npm run dev`}</code></pre>
                </li>
              </ol>
            </li>
            <li style={{ marginBottom: '40px', listStyle: 'none' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#8ab4f8', marginBottom: '8px' }}>9. Testing</h3>
              <ol style={{ marginLeft: '24px', marginBottom: '0' }}>
                <li>Open your Next.js app in the browser</li>
                <li>Open browser developer tools (F12)</li>
                <li>Check the console for connection logs</li>
                <li>You should see:
                  <ul style={{ marginLeft: '18px' }}>
                    <li>&quot;✅ Connected to PrintBridge server&quot;</li>
                    <li>&quot;🖨️ Printers discovered: [printer list]&quot;</li>
                  </ul>
                </li>
                <li>The connection status should show &quot;Connected&quot;</li>
                <li>Available printers should be displayed</li>
              </ol>
            </li>
            <li style={{ marginBottom: '40px', listStyle: 'none' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#8ab4f8', marginBottom: '8px' }}>10. Troubleshooting</h3>
              <ul style={{ marginLeft: '24px', marginBottom: '0' }}>
                <li>Make sure PrintBridge server is running on localhost:8080</li>
                <li>Check browser console for error messages</li>
                <li>Verify WebSocket is supported in your browser</li>
                <li>Check if firewall is blocking the connection</li>
                <li>Try accessing http://localhost:8080 directly to verify server is up</li>
              </ul>
            </li>
            <li style={{ marginBottom: '40px', listStyle: 'none' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#8ab4f8', marginBottom: '8px' }}>11. Key Features</h3>
              <ul style={{ marginLeft: '24px', marginBottom: '0' }}>
                <li>✅ Auto-connect on app load</li>
                <li>✅ Auto-reconnect every 3 seconds if disconnected</li>
                <li>✅ Real-time printer discovery</li>
                <li>✅ Automatic default printer selection</li>
                <li>✅ Print job status updates</li>
                <li>✅ Error handling and logging</li>
                <li>✅ TypeScript support</li>
                <li>✅ React hooks integration</li>
              </ul>
            </li>
            <li style={{ marginBottom: '40px', listStyle: 'none' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#8ab4f8', marginBottom: '8px' }}>12. Usage Examples</h3>
              <div style={{ marginBottom: '8px' }}>Basic usage in a component:</div>
              <pre style={{ background: '#181818', color: '#e8eaed', padding: '18px', borderRadius: '6px', overflowX: 'auto', marginBottom: '0', fontSize: '15px', border: '1px solid #333' }}><code>{`import { usePrintBridgeContext } from '../contexts/PrintBridgeContext';

export const MyComponent = () => {
  const { isConnected, printers, sendPrintJob } = usePrintBridgeContext();
  
  const printLabel = () => {
    const base64Image = 'your-image-base64-string';
    sendPrintJob(base64Image);
  };
  
  return (
    <div>
      <p>Connected: {isConnected ? 'Yes' : 'No'}</p>
      <p>Printers: {printers.join(', ')}</p>
      <button onClick={printLabel}>Print</button>
    </div>
  );
};`}</code></pre>
            </li>
          </ol>
        </section>
      )}
      {platform === 'mac' && (
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 0 32px 0', color: '#e8eaed', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ color: '#9aa0a6', fontSize: '22px', textAlign: 'center' }}>
            macOS documentation coming soon.
          </div>
        </section>
      )}
    </main>
  );
} 