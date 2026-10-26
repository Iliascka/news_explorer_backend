import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import { BadRequestError } from "../utils/errors";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator(value) {
        return validator.isEmail(value);
      },
      message: "You must enter a valid email",
    },
  },
});

userSchema.statics.findUserByCredentials = async function findUserByCredentials(
  email,
  password,
) {
  const user = await this.findOne({ email }).select("+password");
  if (!user) {
    throw new Error("Incorect email or password");
  }
  const result = await bcrypt.compare(password, user.password);
  if (!result) {
    throw new Error("Incorect email or password");
  }
  return user;
};

export const User = mongoose.model("user", userSchema);
