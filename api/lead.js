// Vercel serverless function: emails Site Potential Snapshot requests via Resend.
// Env vars (Vercel project settings): RESEND_API_KEY (required), LEAD_TO, LEAD_FROM (optional).

const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clean = (v, max) => String(v ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);

export default async function handler(req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ error: 'Method not allowed' }); }

  const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  if (b.website) return res.status(200).json({ ok: true }); // honeypot: silently drop bots

  const d = {
    name: clean(b.name, 120), mobile: clean(b.mobile, 40), email: clean(b.email, 200),
    address: clean(b.address, 300), who: clean(b.who, 60), goal: clean(b.goal, 60),
  };
  if (!d.name || !d.mobile || !d.address || !/^\S+@\S+\.\S+$/.test(d.email)) return res.status(400).json({ error: 'Missing or invalid fields' });

  const key = process.env.RESEND_API_KEY;
  if (!key) { console.error('RESEND_API_KEY is not set'); return res.status(500).json({ error: 'Email is not configured' }); }

  const rows = [['Name', d.name], ['Mobile', d.mobile], ['Email', d.email], ['Site address', d.address], ['I am a', d.who], ['Thinking about', d.goal]];
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.LEAD_FROM || 'Landmarx Website <noreply@landmarx.co>',
      to: [process.env.LEAD_TO || 'develop@landmarx.co'],
      reply_to: d.email,
      subject: `Site Potential Snapshot request: ${d.address}`,
      text: rows.map(([k, v]) => `${k}: ${v}`).join('\n'),
      html: `<table cellpadding="6">${rows.map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v)}</td></tr>`).join('')}</table>`,
    }),
  });
  if (!r.ok) { console.error('Resend error', r.status, await r.text()); return res.status(502).json({ error: 'Email failed' }); }
  return res.status(200).json({ ok: true });
}
