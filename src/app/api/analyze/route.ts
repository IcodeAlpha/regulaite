import { NextRequest, NextResponse } from 'next/server';
import { processQuery } from '@/lib/orchestrator';

export async function POST(req: NextRequest) {
  const { query } = await req.json();
  if (!query) return NextResponse.json({ error: 'Query is required' }, { status: 400 });
  const result = await processQuery(query);
  return NextResponse.json(result);
}
