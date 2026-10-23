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

export { getArticles };
