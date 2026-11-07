import { Router } from "express";
import { router as userRouter } from "./user.js";
import { router as articleRouter } from "./articles.js";
import { createUser, loginUser, logoutUser } from "../controllers/users.js";
import { validateUser, validateUserLogin } from "../middlewares/validation.js";

const router = Router();

router.use("/users", userRouter);
router.use("/articles", articleRouter);
router.post("/signin", validateUserLogin, loginUser);
router.post("/signup", validateUser, createUser);
router.post("/signout", logoutUser);
export { router };
