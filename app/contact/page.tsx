'use client'
import React, { useState } from 'react';
import { sendContactEmail } from "./actions";
import { useFormStatus } from "react-dom";
import { useRef } from "react";

const faqs = [
  {
    question: 'What is PrintBridge?',
    answer: 'PrintBridge is a local software solution that enables any web application to print labels directly to thermal label printers, without browser dialogs or cloud dependencies.'
  },
  {
    question: 'Who is PrintBridge for?',
    answer: 'PrintBridge is designed for developers building web apps that require label printing, as well as businesses needing custom label solutions.'
  },
  {
    question: 'Which printers are supported?',
    answer: 'PrintBridge is tested and endorsed for Munbyn and Epson thermal label printers. Other thermal printers may work, but are not officially tested.'
  },
  {
    question: 'Does PrintBridge work offline?',
    answer: 'Yes, PrintBridge runs locally on your Mac or Windows machine and does not require an internet connection.'
  },
  {
    question: 'Is my data sent to the cloud?',
    answer: 'No, all printing is handled locally on your device. Your data never leaves your system.'
  },
  {
    question: 'How do I get PrintBridge?',
    answer: 'PrintBridge is not a public download yet. Please contact us to request access. Instalabel product subscribers receive PrintBridge for free.'
  },
  {
    question: 'What browsers are supported?',
    answer: 'We recommend using Google Chrome on both Mac and Windows for the best experience.'
  },
  {
    question: 'How do I get support?',
    answer: 'You can contact us via email at contact@instalabel.co or by phone at +447585568153.'
  }
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" style={{
      marginTop: '12px',
      background: 'transparent',
      color: '#e8eaed',
      fontWeight: 600,
      fontSize: '17px',
      border: '1.5px solid #e8eaed',
      borderRadius: '2px',
      padding: '14px 0',
      cursor: pending ? 'not-allowed' : 'pointer',
      transition: 'background 0.2s, color 0.2s, border 0.2s',
      width: '100%',
      letterSpacing: '1px',
      opacity: pending ? 0.7 : 1,
    }} disabled={pending}>{pending ? "Sending..." : "Send Message"}</button>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);
  const formRef = useRef<HTMLFormElement>(null);
  async function action(formData: FormData) {
    setStatus(null);
    const result = await sendContactEmail(formData);
    if (result && result.ok) {
      setStatus('success');
      formRef.current?.reset();
    } else {
      setStatus('error');
    }
  }
  return (
    <>
      <form ref={formRef} action={action} style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: 420 }}>
        <label style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: 16 }}>
          Name
          <input name="name" type="text" required style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', marginTop: '6px', fontSize: 16 }} />
        </label>
        <label style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: 16 }}>
          Email
          <input name="email" type="email" required style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', marginTop: '6px', fontSize: 16 }} />
        </label>
        <label style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: 16 }}>
          Message
          <textarea name="message" required rows={5} style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', marginTop: '6px', fontSize: 16, resize: 'vertical' }} />
        </label>
        <SubmitButton />
      </form>
      {status === 'success' && (
        <div style={{ color: 'var(--google-green)', marginTop: 16, fontWeight: 500, fontSize: 16 }}>Thank you! Your message has been sent.</div>
      )}
      {status === 'error' && (
        <div style={{ color: 'var(--google-red)', marginTop: 16, fontWeight: 500, fontSize: 16 }}>Sorry, something went wrong. Please try again later.</div>
      )}
    </>
  );
}

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '64px 0 48px 0',
      display: 'flex',
      gap: '64px',
      justifyContent: 'center',
      alignItems: 'flex-start',
    }}>
      {/* Contact Form */}
      <section style={{
        flex: 1,
        paddingRight: '32px',
        borderRight: '1.5px solid var(--border-color)',
        minWidth: '320px',
      }}>
        <h1 style={{ fontSize: 'var(--font-h2)', fontWeight: 700, marginBottom: '32px', color: 'var(--text-primary)' }}>Contact Us</h1>
        <ContactForm />
        <div style={{ marginTop: '32px', color: 'var(--text-secondary)', fontSize: 16 }}>
          <div>Email: <a href="mailto:contact@instalabel.co" style={{ color: 'var(--google-blue)' }}>contact@instalabel.co</a></div>
          <div>Phone: <a href="tel:+447585568153" style={{ color: 'var(--google-blue)' }}>+447585568153</a></div>
          <div style={{ marginTop: '12px', color: 'var(--text-muted)', fontSize: 15 }}>For partnership or product inquiries, please use the form or contact us directly.</div>
        </div>
      </section>
      {/* FAQ Accordion */}
      <section style={{
        flex: 1,
        paddingLeft: '32px',
        minWidth: '320px',
      }}>
        <h2 style={{ fontSize: 'var(--font-h3)', fontWeight: 700, marginBottom: '32px', color: 'var(--text-primary)' }}>FAQs</h2>
        <div>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ marginBottom: '24px', borderBottom: '1px solid var(--border-color)' }}>
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '18px',
                  padding: '16px 0',
                  cursor: 'pointer',
                  outline: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'color 0.2s',
                }}
                aria-expanded={openIndex === idx}
              >
                {faq.question}
                <span style={{ fontSize: '22px', marginLeft: '8px', color: 'var(--google-blue)' }}>{openIndex === idx ? '-' : '+'}</span>
              </button>
              {openIndex === idx && (
                <div style={{ color: 'var(--text-muted)', padding: '0 0 16px 0', fontSize: '16px', lineHeight: 1.6 }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 