import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';


const uri = process.env.MONGODB_URI;

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export async function POST(req) {
  try {
    const body = await req.json(); // For Next.js 13 and above
    const client = await clientPromise;
    const db = client.db('your-database-name');
    const collection = db.collection('your-collection-name');
    await collection.insertOne(body);
    return NextResponse.json({ message: 'Employee added successfully' }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: 'Error adding employee', error: e.message }, { status: 500 });
  }
}
