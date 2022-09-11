const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { db } = require("./src/config/database");

// router
const postRouter = require("./src/route/post");
const userRouter = require("./src/route/user");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

app.get("/", function (req, res) {
  res.json({ hello: "world" });
});

app.use("/users", userRouter);
app.use("/posts", postRouter);

function normalizePort(val) {
  const _port = parseInt(val, 10);

  if (isNaN(_port)) return val;

  if (_port >= 0) return _port;

  return false;
}

const port = normalizePort(process.env.PORT || 8080);
const server = http.Server(app);

server.listen(port, () => {
  console.log(`App started on port ${port}`);
});
module.exports = app;
