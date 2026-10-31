import { Router } from "express";
import {
  getArticles,
  createArticle,
  deleteArticle,
} from "../controllers/articles.js";
import { authorizeUser } from "../middlewares/auth.js";
import {
  validateArticle,
  validateArticleId,
} from "../middlewares/validation.js";
const router = Router();

router.get("/", authorizeUser, getArticles);
router.post("/", authorizeUser, validateArticle, createArticle);
router.delete("/:articleId", authorizeUser, validateArticleId, deleteArticle);

export { router };
