import { Joi, celebrate } from "celebrate";
import validator from "validator";

const validateURL = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.error("string.uri");
};
