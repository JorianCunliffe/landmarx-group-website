import { NextRequest, NextResponse } from 'next/server'

const TO = ['projects@landmarx.co', 'jorian@landmarx.co']

export async function POST(request: NextRequest) {
  const { name, email, phone, organisation, interestType, message } = await request.json()

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[register-interest] RESEND_API_KEY not set')
    return NextResponse.json({ ok: true })
  }

  const body = `
New Register Interest submission — Landmarx

Name:           ${name}
Email:          ${email}
Phone:          ${phone || 'Not provided'}
Organisation:   ${organisation || 'Not provided'}
Interest Type:  ${interestType}
Message:        ${message}
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
      subject: `New register interest — ${name} (${interestType})`,
      text: body,
    }),
  })

  return NextResponse.json({ ok: true })
}
