import pool from '../../../../../db';
import { NextRequest, NextResponse } from 'next/server';
// import { NextApiRequest } from 'next';

export async function GET(req: NextRequest, { params }: any) {
  try {
    console.log('param', params);

    return NextResponse.json(params);
    // const query = `SELECT * from "User" where = ${id}`;
  } catch (error) {
    return NextResponse.json({ error: 'Error' }, { status: 500 });
  }
}
