const express = require("express");

const Posts = require("./postDb");

const router = express.Router();

router.get("/", (req, res) => {
  Posts.get(req.query)
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error retrieving posts",
      });
    });
});

router.get("/:id", (req, res) => {
  Posts.getById(req.params.id)
    .then((post) => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Error retrieving post",
      });
    });
});

router.delete("/:id", (req, res) => {
  Posts.remove(req.params.id)
    .then((count) => {
      if (count > 0) {
        res.status(200).json({ message: "The post has been deleted." });
      } else {
        res.status(404).json({ message: "The post could not be found" });
      }
    })
    .catch((error) => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: "Error removing the post",
      });
    });
});


router.put("/:id", (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
