import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { limiter } from "./middlewares/security.js";
import "dotenv/config";
import { router as mainRouter } from "./routes/index.js";
import { errors } from "celebrate";
import { errorHandler } from "./middlewares/error-handler.js";
import cors from "cors";
import { errorLogger, requestLogger } from "./middlewares/logger.js";

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
s;
app.use(
  cors({
    origin: [
      "http://127.0.0.1:5173",
      "http://127.0.0.1:5174",
      process.env.FRONTEND_URL,
    ].filter(Boolean),
    credentials: true,
  }),
);
app.use(requestLogger);
app.use(limiter);
app.use(cookieParser());
app.use("/", mainRouter);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);
