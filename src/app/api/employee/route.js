import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

export async function GET(req) {
  const { searchParams } = new URL(req.url, 'http://localhost');
  const employeeId = searchParams.get('employeeId');

  try {
    const client = await clientPromise;
    const db = client.db('your-database-name');
    const collection = db.collection('your-collection-name');

    const result = await collection.findOne({ employeeId });

    if (!result) {
      return NextResponse.json({ message: 'Employee not found' }, { status: 404 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
