import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { limiter } from "./middlewares/security.js";
import "dotenv/config";
import { router as mainRouter } from "./routes/index.js";
import { errorHandler } from "./middlewares/error-handler.js";

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
app.use(express.json());
app.use(limiter);
app.use(cookieParser());
app.use("/", mainRouter);
app.use(errorHandler);
