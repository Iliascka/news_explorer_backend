import { Joi, celebrate } from "celebrate";

const validateArticle = celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().required().messages({
      "string.empty": "Keyword is required",
    }),
    title: Joi.string().required().messages({
      "string.empty": "Title is required",
    }),
    text: Joi.string().required().messages({
      "string.empty": "Text is required",
    }),
    date: Joi.string().isoDate().required().messages({
      "string.empty": "Date is required",
    }),
    source: Joi.string().required().messages({
      "string.empty": "Source is required",
    }),
    link: Joi.string()
      .required()
      .uri({ scheme: [/^https?/] })
      .messages({
        "string.uri": "Please enter a valid URL",
        "string.empty": "Link is required",
      }),
    image: Joi.string()
      .required()
      .uri({ scheme: [/^https?/] })
      .messages({
        "string.uri": "Please enter a valid URL",
        "string.empty": "Image is required",
      }),
  }),
});

const validateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30).messages({
      "string.min": "The minimum length of the name field is 2",
      "string.max": "The maximum length of the name field is 30",
      "string.empty": "The name field must be filled in",
    }),
    email: Joi.string().required().email(),
    password: Joi.string().min(8).required(),
  }),
});

const validateUserLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().min(8).required(),
  }),
});

const validateArticleId = celebrate({
  params: Joi.object({
    articleId: Joi.string().hex().length(24).required(),
  }),
});

export { validateUser, validateArticle, validateArticleId, validateUserLogin };
