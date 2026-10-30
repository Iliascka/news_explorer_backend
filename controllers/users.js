import { User } from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../utils/config.js";

import {
  BadRequestError,
  ConflictError,
  UnauthorizedError,
  NotFoundError,
} from "../utils/errors/index.js";

const getCurrentUser = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const user = await User.findById(_id).orFail();
    res.status(200).json({
      user,
    });
  } catch (error) {
    console.error(error);
    if (error.name === "DocumentNotFoundError") {
      return next(new NotFoundError("Requested resourse not found"));
    }
    return next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw new BadRequestError("All fields are required");
    }
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash });
    const userObject = user.toObject();
    delete userObject.password;
    res
      .status(201)
      .json({ user: userObject, message: "User has been created" });
  } catch (error) {
    console.error(error);
    if (error.name === "ValidationError") {
      return next(new BadRequestError("Invalid user data"));
    }
    if (error.code === 1100) {
      return next(new ConflictError("Conflict Error"));
    }
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new BadRequestError("All fields are required"));
  }
  try {
    const user = await User.findUserByCredentials(email, password);
    const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
      expiresIn: "7d",
    });
    res.cookie("jwt", token, {
      maxAge: 3600000 * 24 * 7,
      httpOnly: true,
      sameSite: true,
      secure: process.env.NODE_ENV === "production",
    });
    res.send("Completed");
  } catch (error) {
    console.error(error);
    if (error.message === "Incorect email or password") {
      return next(new UnauthorizedError("Incorrect email or password"));
    }
    return next(error);
  }
};

export { getCurrentUser, createUser, loginUser };
