import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export const POST = async (req) => {
  try {
    const { username, post, employeeId, doj, team, image } = await req.json();

    await client.connect();
    const database = client.db('your-database-name');
    const collection = database.collection('your-collection-name');

    // Insert the new employee data into the database
    const result = await collection.insertOne({
      username,
      post,
      employeeId,
      doj,
      team,
      image,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: 'Employee added successfully', result }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error adding employee', error }, { status: 500 });
  } finally {
    await client.close();
  }
};