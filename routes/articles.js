import { router } from "express";
import {
  getArticles,
  createArticle,
  deleteArticle,
} from "../controllers/articles.js";

router.get("/", getArticles);
router.post("/", createArticle);
router.delete("/:articleId", deleteArticle);
