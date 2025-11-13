// lib/mongo.js
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI || process.env.MONGO_URI;
if (!MONGO_URI) {
  throw new Error("Missing MONGO_URI / MONGODB_URI environment variable");
}

let cached = global._mongo; // reuse during dev/hot-reload / serverless warm invocations
if (!cached) cached = global._mongo = { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    // create and store promise so concurrent calls reuse it
    cached.promise = mongoose.connect(MONGO_URI, {
      // Useful debug / safety options:
      // serverSelectionTimeoutMS: 10000, // how long to try selecting a server
      // socketTimeoutMS: 45000,
      // family: 4, // prefer IPv4 - sometimes helpful if IPv6/DNS is problematic
    }).then(m => m.connection);
  }

  // add listeners for debug visibility
  mongoose.connection.on("connecting", () => console.log("MONGO: connecting..."));
  mongoose.connection.on("connected", () => console.log("MONGO: connected"));
  mongoose.connection.on("open", () => console.log("MONGO: open"));
  mongoose.connection.on("error", (err) => console.error("MONGO: error", err));
  mongoose.connection.on("disconnected", () => console.log("MONGO: disconnected"));

  cached.conn = await cached.promise;
  return cached.conn;
}