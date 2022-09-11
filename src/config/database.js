require("dotenv").config();

const env = process.env;

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

// "mongodb://username:password@host:port/database";
let connection = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

module.exports = {
  db: connection,
};
