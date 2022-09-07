const User = require("../model/user");
const bcrypt = require("bcrypt");

const register = async (name, password) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  let user = new User({
    name: name,
    password: hashPassword,
  });
  return user.save();
};

const login = async (name, password) => {
  const query = {
    name: name,
  };
  const user = await User.findOne(query);
  if (user) {
    const validPass = await bcrypt.compare(password, user.password);
    if (validPass) {
      return user;
    } else {
      throw Error("Invalid user or password");
    }
  }
  throw Error("Invalid user or password");
};

const getUserById = async (userId) => {
  const user = await User.findById(userId).select("name");
  return user;
};

module.exports = {
  register,
  login,
  getUserById,
};
