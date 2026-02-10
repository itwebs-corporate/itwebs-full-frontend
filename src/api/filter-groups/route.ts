import { NextResponse } from 'next/server';

import { fetchFilterGroups } from '@/api/server';

export async function GET() {
  const data = await fetchFilterGroups();
  return NextResponse.json(data);
}
