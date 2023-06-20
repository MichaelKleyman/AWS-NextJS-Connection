import pool from '../../../db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const query = 'SELECT * FROM "User"';
    const { rows } = await pool.query(query);
    console.log(rows);

    return NextResponse.json(rows);
  } catch (error) {
    console.error('API ERROR', error);
  }
}
