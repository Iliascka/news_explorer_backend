import { Router } from "express";
import {
  getArticles,
  createArticle,
  deleteArticle,
} from "../controllers/articles.js";
import { authorizeUser } from "../middlewares/auth.js";
const router = Router();

router.get("/", authorizeUser, getArticles);
router.post("/", authorizeUser, createArticle);
router.delete("/:articleId", authorizeUser, deleteArticle);

export { router };
