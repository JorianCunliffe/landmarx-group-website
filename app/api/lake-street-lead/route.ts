import { NextRequest, NextResponse } from 'next/server'

const TO = ['projects@landmarx.co', 'jorian@landmarx.co']

export async function POST(request: NextRequest) {
  const { name, email, phone, callTime, message } = await request.json()

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    // No key configured — still show success to user, log server-side
    console.error('[lake-street-lead] RESEND_API_KEY not set')
    return NextResponse.json({ ok: true })
  }

  const body = `
New enquiry — 262 Lake Street (Co-Living)

Name:          ${name}
Email:         ${email}
Phone:         ${phone}
Best time:     ${callTime || 'Not specified'}
Message:       ${message || '—'}
  `.trim()

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Landmarx Website <noreply@landmarx.co>',
      to: TO,
      reply_to: email,
      subject: `New 262 Lake Street enquiry — ${name}`,
      text: body,
    }),
  })

  return NextResponse.json({ ok: true })
}
