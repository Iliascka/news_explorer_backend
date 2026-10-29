import { Router } from "express";
import { getCurrentUser, createUser } from "../controllers/users.js";
import { authorizeUser } from "../middlewares/auth.js";
const router = Router();

router.get("/me", authorizeUser, getCurrentUser);
router.post("/me", createUser);

export { router };
