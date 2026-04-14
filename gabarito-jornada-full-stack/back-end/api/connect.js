import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.MONGO_URI;

const client = new MongoClient(URI);

export const database = client.db("spotifyAula");
// const songCollection = await database.collection("songs").find({}).toArray();

// console.log(songCollection);
