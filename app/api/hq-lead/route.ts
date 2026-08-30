import { NextRequest, NextResponse } from 'next/server'

const TO = ['projects@landmarx.co', 'jorian@landmarx.co']

export async function POST(request: NextRequest) {
  const { name, email, phone, company, spaceType, teamSize, spaceRequired, callTime, message } = await request.json()

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    // No key configured — still show success to user, log server-side
    console.error('[hq-lead] RESEND_API_KEY not set')
    return NextResponse.json({ ok: true })
  }

  const body = `
New enquiry — The HQ Building (Lake Street, Cairns)

Name:          ${name}
Email:         ${email}
Phone:         ${phone}
Company:       ${company || 'Not specified'}
Space type:    ${spaceType || 'Not specified'}
Team size:     ${teamSize || 'Not specified'}
Space needed:  ${spaceRequired ? `${spaceRequired} m²` : 'Not specified'}
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
      subject: `New The HQ Building enquiry — ${name}`,
      text: body,
    }),
  })

  return NextResponse.json({ ok: true })
}
