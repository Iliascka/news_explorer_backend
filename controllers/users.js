import { User } from "../models/user.js";

const getCurrentUser = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const user = await User.findById(_id).orFail();
    res.status(200).json({
      user,
      message: "User has been created",
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export { getCurrentUser };
