import { Joi, celebrate } from "celebrate";

const validateArticle = celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().required().min(2).max(30).message({
      "string.empty": "Keyword is required",
    }),
    title: Joi.string().required().message({
      "string.empty": "Title is required",
    }),
    text: Joi.string().required().message({
      "string.empty": "Text is required",
    }),
    date: Joi.string().required().message({
      "string.empty": "Date is required",
    }),
    source: Joi.string().required().message({
      "string.empty": "Source is required",
    }),
    link: Joi.string()
      .required()
      .uri({ scheme: ["http", "htpps"] })
      .message({
        "string.empty": "Please enter a valid URL",
        "string.empty": "Link is required",
      }),
    image: Joi.string()
      .required()
      .uri({ scheme: ["http", "https"] })
      .message({
        "string.empty": "Please enter a valid URL",
        "string.empty": "Image is required",
      }),
  }),
});
const validateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30).message({
      "string.min": "The minimum length of the name field is 2",
      "string.max": "The maximum length of the name field is 30",
      "string.empty": "The name field must be filled in",
    }),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});
