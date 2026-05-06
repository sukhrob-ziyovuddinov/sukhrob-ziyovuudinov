export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    return res.status(503).json({ error: 'GEMINI_API_KEY is not configured on the server.' });
  }

  const prompt = req.body?.prompt;
  if (!prompt) {
    return res.status(400).json({ error: 'Missing prompt' });
  }

  try {
    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    });
    const data = await r.json();
    if (!r.ok) {
      return res.status(r.status).json({ error: data?.error?.message || 'Gemini request failed' });
    }

    const text = data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join('\n') || '';
    return res.status(200).json({ text });
  } catch {
    return res.status(500).json({ error: 'Server error while contacting Gemini' });
  }
}
