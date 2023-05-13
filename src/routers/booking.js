const express = require("express");
const User = require("../models/user");
const auth = require("../middleware/auth");
const subscribe = require("../middleware/subscribe");
const router = new express.Router();

router.post("/book_session", auth, subscribe, async (req, res) => {
  try {
    const user = req.user;
    res.send("Successful!");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
