const express = require("express");
const postRouter = require("./posts/postRouter");

const server = express();

server.use("/api/posts", postRouter);

//custom middleware

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

module.exports = server;
