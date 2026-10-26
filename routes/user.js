import { Router } from "express";
import { getCurrentUser, createUser } from "../controllers/users.js";
const router = Router();

router.get("/me", getCurrentUser);
router.post("/me", createUser);

export { router };
