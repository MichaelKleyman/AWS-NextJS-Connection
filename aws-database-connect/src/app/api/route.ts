import pool from '../../../db';
// import { NextResponse } from 'next/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const query = 'SELECT * FROM "User"';
    const data = await pool.query(query);
    console.log(data);

    NextResponse.json(data);
  } catch (error) {
    console.error(error);
  }
}
