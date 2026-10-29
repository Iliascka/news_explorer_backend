import { JWT_SECRET } from "../utils/config.js";
import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../utils/errors";

export const authorizeUser = (res, req, error) => {
  if (!req.cookies?.jwt) {
    return next(new UnauthorizedError("Authorization Required"));
  }
  let payload;
  const token = req.cookies.jwt;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return next(new UnauthorizedError("Authorization Required"));
  }
  req.user = payload;
  return next();
};
