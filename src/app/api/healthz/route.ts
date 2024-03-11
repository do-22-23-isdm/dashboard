import { NextResponse } from 'next/server';

// The endpoint will be (hostname)/api/healthcheck
export async function GET() {
  return NextResponse.json(
    { status: 'Healthy' },
    {
      status: 200,
      statusText: 'Healthy',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
}
