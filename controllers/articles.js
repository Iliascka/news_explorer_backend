import ArticleItem from "../models/article";

const getArticles = async (req, res, next) => {
  try {
    const items = await ArticleItem.find({});
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
    next(error);
  }
};

export { getArticles, createArticle };
