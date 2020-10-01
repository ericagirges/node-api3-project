const express = require('express');
const Users = require("./userDb");

const router = express.Router();

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {
  Users.get(req.query)
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      console.log("Error: ", error)
      res.status(500).json({
        message: "Error retrieving users",
      });
    });
});

router.get('/:id', (req, res) => {
  Users.getById(req.params.id)
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((error) => {
      console.log("Error: ", error)
      res.status(500).json({
        message: "Error retrieving user",
      });
    });
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  Users.remove(req.params.id)
    .then((count) => {
      if (count > 0) {
        res.status(200).json({ message: "The user has been deleted." });
      } else {
        res.status(404).json({ message: "The user could not be found" });
      }
    })
    .catch((error) => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: "Error removing the user",
      });
    });
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
