import { Router } from "express";
import { router as userRouter } from "./user.js";
import { router as articleRouter } from "./articles.js";

const router = Router();

router.use("/users", userRouter);
router.use("/articles", articleRouter);

export { router };
