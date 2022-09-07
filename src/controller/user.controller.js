const userService = require("../service/user.service");
const { TOKEN_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res, next) => {
  let name = req.body["name"];
  let password = req.body["password"];

  try {
    let user = await userService.register(name, password);
    let payload = { id: user._id };
    const token = jwt.sign(payload, TOKEN_SECRET);

    res.status(200).send({ token });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: "User already existed" });
  }
};

exports.login = async (req, res, next) => {
  let name = req.body["name"];
  let password = req.body["password"];

  try {
    let user = await userService.login(name, password);
    let payload = { id: user._id };
    const token = jwt.sign(payload, TOKEN_SECRET);

    res.status(200).send({ _id: user._id, name: user.name, token });
  } catch (err) {
    res.status(404).send({ message: "Invalid user" });
  }
};

exports.getUserById = async (req, res, next) => {
  let userId = req.params["userId"];
  try {
    const user = await userService.getUserById(userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: "No user found" });
  }
};
