require("dotenv").config();

const env = process.env;

const path = require("path");
const uploadDir = path.join(
  path.dirname(path.dirname(__dirname)),
  env.UPLOAD_DIR
);
module.exports = {
  TOKEN_SECRET: env.TOKEN_SECRET, //should be store in env file,
  uploadDir,
};
