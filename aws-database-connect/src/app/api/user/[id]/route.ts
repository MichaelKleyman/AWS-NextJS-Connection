import pool from '../../../../../db';
import { NextRequest, NextResponse } from 'next/server';
// import { NextApiRequest } from 'next';

export async function GET(req: NextRequest, { params }: any) {
  try {
    const { id } = params;
    const query = `SELECT * FROM "User" WHERE id = ${id}`;
    const { rows } = await pool.query(query);
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({ error: 'Error' }, { status: 500 });
  }
}
