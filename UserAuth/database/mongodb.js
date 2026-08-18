import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error(
    "Please specify the MONGODB_URI environment variable inside the environment files",
  );
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
  } catch (error) {
    console.error("error connecting to the database", error);

    process.exit(1);
  }
};

export default connectToDatabase;
