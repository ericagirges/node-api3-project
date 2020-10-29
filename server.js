const express = require("express");
const postRouter = require("./posts/postRouter");
const userRouter = require("./users/userRouter");

const server = express();

// logger middlerware
function logger(req, res, next) {
  const timestamp = new Date(Date.now()).toLocaleString();
  console.log(`${req.method} ${req.url} ${timestamp}`);
  next();
};
server.use(logger);

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use("/api/posts", postRouter);
server.use("/api/users", userRouter);

module.exports = server;
