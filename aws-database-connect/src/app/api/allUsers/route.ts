import pool from '../../../../db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const query = 'SELECT * FROM "User"';
    const { rows } = await pool.query(query);
    return NextResponse.json(rows);
  } catch (error) {
    console.error('API ERROR', error);
  }
}

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    console.log(request);
  } catch (error) {
    return NextResponse.json({ error: 'Post request failed' });
  }
}
