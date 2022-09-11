require("dotenv").config();

const { UPLOAD_DIR, TOKEN_SECRET } = process.env;

const path = require("path");
const uploadDir = path.join(path.dirname(path.dirname(__dirname)), UPLOAD_DIR);
module.exports = {
  TOKEN_SECRET: TOKEN_SECRET, //should be store in env file,
  uploadDir,
};
