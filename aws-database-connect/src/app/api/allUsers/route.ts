import pool from '../../../../db';
import { NextRequest, NextResponse } from 'next/server';
import { NextApiRequest } from 'next';

export async function GET(request: NextRequest) {
  try {
    const query = 'SELECT * FROM "User"';
    const { rows } = await pool.query(query);
    return NextResponse.json(rows);
  } catch (error) {
    console.error('API ERROR', error);
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log(data);
    const query = 'INSERT INTO "User" (name, description) VALUES ($1, $2)';
    const values = [data.name, data.description];
    await pool.query(query, values);
    return NextResponse.json({ message: 'Request success' });
  } catch (error) {
    return NextResponse.json({ error: 'Post request failed' });
  }
}

export async function DELETE(req: NextApiRequest) {
  try {
    const id = req.url?.split('?id=')[1];
    const query = `DELETE FROM "User" WHERE id = ${id}`;
    await pool.query(query);
  } catch (error) {
    console.error('API ERROR', error);
  }
}
