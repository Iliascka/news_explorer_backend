import { Router } from "express";
import {
  getArticles,
  createArticle,
  deleteArticle,
} from "../controllers/articles.js";
const router = Router();

router.get("/", getArticles);
router.post("/", createArticle);
router.delete("/:articleId", deleteArticle);

export { router };
