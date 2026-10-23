import User from "../models/user";

const getCurrentUser = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const user = await User.find(_id).orFail();
    res.status(200).send(user);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export { getCurrentUser };
