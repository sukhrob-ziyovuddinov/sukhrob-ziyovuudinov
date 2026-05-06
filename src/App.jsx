import React, { useState } from 'react';
import { initializeFirebase } from './lib/firebase';

const firebaseState = initializeFirebase();

export default function App() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const askAssistant = async () => {
    setError('');
    setResult('');
    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || 'Assistant request failed');
      setResult(data?.text || 'No response text returned');
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <main style={{ fontFamily: 'Inter, Arial, sans-serif', maxWidth: 900, margin: '2rem auto', padding: '1rem' }}>
      <h1>ASII Sovereign</h1>
      <p>Institutional fintech intelligence workspace.</p>
      {!firebaseState.enabled && <p style={{ color: '#b45309' }}>{firebaseState.message}</p>}
      <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} rows={4} style={{ width: '100%' }} placeholder="Ask ASII assistant" />
      <button type="button" onClick={askAssistant} style={{ marginTop: '1rem' }}>Ask Gemini</button>
      {error && <p style={{ color: '#b91c1c' }}>{error}</p>}
      {result && <pre style={{ whiteSpace: 'pre-wrap' }}>{result}</pre>}
    </main>
  );
}
