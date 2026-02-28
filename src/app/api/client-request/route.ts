import { NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL;

type FetchErr = { code?: string; cause?: { code?: string } };

export async function POST(req: Request) {
  const targetPath = '/client/request';

  if (!BACKEND_URL) {
    return NextResponse.json(
      { message: 'Backend URL is not set', code: 'NO_BACKEND_URL' },
      { status: 500 }
    );
  }

  let body: unknown;

  try {
    body = await req.json();
  } catch (e) {
    return NextResponse.json(
      { message: 'Invalid JSON body', code: 'INVALID_BODY_JSON' },
      { status: 400 }
    );
  }

  const backendUrl = `${BACKEND_URL}${targetPath}`;

  try {
    const res = await fetch(backendUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      cache: 'no-store',
    });

    const text = await res.text().catch(() => '');

    if (!res.ok) {
      return NextResponse.json(
        {
          message: 'Backend error',
          code: `HTTP_${res.status}`,
          status: res.status,
          backendUrl,
          body: text,
        },
        { status: res.status }
      );
    }

    if (!text) return NextResponse.json({ ok: true }, { status: 200 });

    try {
      return NextResponse.json(JSON.parse(text), { status: 200 });
    } catch {
      return NextResponse.json({ ok: true, raw: text }, { status: 200 });
    }
  } catch (e) {
    const err = e as FetchErr;
    const code = err.cause?.code ?? err.code ?? 'UNKNOWN';

    return NextResponse.json(
      {
        message: 'Backend fetch failed',
        code: `NET_${code}`,
        backendUrl,
      },
      { status: 502 }
    );
  }
}
