import { Router } from "express";
import { getCurrentUser } from "../controllers/users.js";
import { authorizeUser } from "../middlewares/auth.js";
const router = Router();

router.get("/me", authorizeUser, getCurrentUser);

export { router };
