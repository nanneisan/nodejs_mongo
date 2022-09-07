require("dotenv").config();

const env = process.env;

let host = env.DB_HOST;
let port = env.DB_PORT;
let username = env.DB_USER;
let password = env.DB_PASSWORD;
let database = env.DB_NAME;

// "mongodb://username:password@host:port/database";
let connection = `mongodb://${host}:${port}/${database}`;

module.exports = {
  db: connection,
};
