import { NextResponse } from 'next/server';

export const runtime = 'edge';

type VisitorPayload = {
  path?: string;
  referrer?: string;
  title?: string;
  language?: string;
  device?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  consent?: boolean;
};

const clean = (value: unknown) => {
  if (typeof value !== 'string') return '';
  return value.slice(0, 500);
};

export async function POST(request: Request) {
  let payload: VisitorPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (!payload.consent) {
    return NextResponse.json({ error: 'Consent required' }, { status: 403 });
  }

  const headers = request.headers;
  const row = {
    timestamp: new Date().toISOString(),
    path: clean(payload.path),
    title: clean(payload.title),
    referrer: clean(payload.referrer),
    language: clean(payload.language),
    device: clean(payload.device),
    utmSource: clean(payload.utmSource),
    utmMedium: clean(payload.utmMedium),
    utmCampaign: clean(payload.utmCampaign),
    country: clean(headers.get('x-vercel-ip-country') || headers.get('cf-ipcountry')),
    region: clean(headers.get('x-vercel-ip-country-region')),
    city: clean(headers.get('x-vercel-ip-city')),
    userAgent: clean(headers.get('user-agent')),
  };

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json({ saved: false, reason: 'GOOGLE_SHEETS_WEBHOOK_URL is not configured' });
  }

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(row),
    });
  } catch {
    return NextResponse.json({ error: 'Unable to forward visitor data' }, { status: 502 });
  }

  return NextResponse.json({ saved: true });
}
