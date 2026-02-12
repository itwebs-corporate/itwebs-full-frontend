import { NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL;
if (!BACKEND_URL) throw new Error('BACKEND ERROR: BACKEND_URL is not set');

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch(`${BACKEND_URL}/client/request`, {
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
          status: res.status,
          backendUrl: `${BACKEND_URL}/client/request`,
          body: text,
        },
        { status: res.status }
      );
    }

    try {
      return NextResponse.json(JSON.parse(text), { status: 200 });
    } catch {
      return NextResponse.json({ ok: true, raw: text }, { status: 200 });
    }
  } catch (e) {
    return NextResponse.json({ message: `Bad request - ${String(e)}` }, { status: 400 });
  }
}
