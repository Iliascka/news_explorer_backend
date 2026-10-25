import ArticleItem from "../models/article.js";
import { ForbidenError, BadRequestError, NotFoundError } from "../errors/index.js";

const getArticles = async (req, res, next) => {
  try {
    const items = await ArticleItem.find({ owner: req.user._id });
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const createArticle = async (req, res, next) => {
  try {
    const { title, keyword, date, text, source, image, link } = req.body;
    const owner = req.user._id;
    const article = await ArticleItem.create({
      title,
      keyword,
      date,
      text,
      source,
      image,
      link,
      owner,
    });
    res.status(201).json(article);
  } catch (error) {
    console.error(error);
    if (error.name === "ValidationError") {
      return next(new BadRequestError("Invalid article data"));
    }

    return next(error);
  }
};

const deleteArticle = async (req, res, next) => {
  try {
    const { articleId } = req.params;
    const article = await ArticleItem.findById(articleId).orFail();
    if (!article.owner.equals(req.user._id)) {
      return next(new ForbidenError("Forbidden"));
    }
    await article.deleteOne();
    res.status(200).json({ message: "Article deleted" });
  } catch (error) {
    console.error(error);
    if (error.name === "CastError") {
      return next(new BadRequestError("Invalid article ID"));
    }
    if (error.name === "DocumentNotFoundError") {
      return next(new NotFoundError("Requested resourse not found"));
    }
    return next(error);
  }
};

export { getArticles, createArticle, deleteArticle };
