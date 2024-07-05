import { connectToDB } from "./utils";
import {  Product } from "./models";
import {User} from "@/models/user"

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function fetchUser(q = "", page = 1, limit = 10) {
  await client.connect();
  const db = client.db('your-database-name');
  const collection = db.collection('your-collection-name');

  const query = q ? { username: new RegExp(q, 'i') } : {};
  const users = await collection.find(query)
    .skip((page - 1) * limit)
    .limit(limit)
    .toArray();
  const count = await collection.countDocuments(query);

  return { count, users };
}

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;
  try {
    await connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const product = await Product.find({ title: { $regex: regex } }).limit(ITEM_PER_PAGE)
   .skip(ITEM_PER_PAGE * (page - 1));
      return { count, product };
  } catch (err) {
    console.error("Failed to fetch product:", err);
    throw new Error("Failed to fetch product!");
  }
};


export const fetchUsers = async (id) => {
  console.log(id);
  try {
    await connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};