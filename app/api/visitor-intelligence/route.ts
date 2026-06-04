import { NextResponse } from 'next/server';

export const runtime = 'edge';

type VisitorPayload = {
  path?: string;
  referrer?: string;
  title?: string;
  language?: string;
  languages?: string;
  device?: string;
  platform?: string;
  timezone?: string;
  screen?: string;
  viewport?: string;
  pixelRatio?: string;
  cookiePreference?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
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

  const headers = request.headers;
  const row = {
    timestamp: new Date().toISOString(),
    path: clean(payload.path),
    title: clean(payload.title),
    referrer: clean(payload.referrer),
    language: clean(payload.language),
    languages: clean(payload.languages),
    device: clean(payload.device),
    platform: clean(payload.platform),
    timezone: clean(payload.timezone),
    screen: clean(payload.screen),
    viewport: clean(payload.viewport),
    pixelRatio: clean(payload.pixelRatio),
    cookiePreference: clean(payload.cookiePreference),
    utmSource: clean(payload.utmSource),
    utmMedium: clean(payload.utmMedium),
    utmCampaign: clean(payload.utmCampaign),
    utmTerm: clean(payload.utmTerm),
    utmContent: clean(payload.utmContent),
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
