import { Router } from "express";
import { router as userRouter } from "./user.js";
import { router as articleRouter } from "./articles.js";
import { createUser, loginUser } from "../controllers/users.js";

const router = Router();

router.use("/users", userRouter);
router.use("/articles", articleRouter);
router.post("/signin", loginUser);
router.post("/signup", createUser);
export { router };
