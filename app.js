import express from "express";
import mongoose from "mongoose";

const app = express();
const { PORT = 3000 } = process.env;

async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/newsexplorer");
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

connectDB();
