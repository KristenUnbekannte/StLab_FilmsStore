const express = require("express");
const router = express.Router();

const films = require("./films");
const images = require("./images");
const comments = require("./comments");
const account = require("./account");
const rating = require("./rating");
const admin = require("./admin");

router.use("/api/films", films);
router.use("/api/images", images);
router.use("/api/comment", comments);
router.use("/api/account", account);
router.use("/api/rating", rating);
router.use("/api/admin", admin);

module.exports = router;
