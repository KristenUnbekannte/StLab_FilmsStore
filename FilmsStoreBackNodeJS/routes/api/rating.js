const express = require("express");
const passport = require("passport");

const ratingController = require("../../controllers/rating-controller");
const router = express.Router();

router.get(
  "/:filmId",
  passport.authenticate("jwt", { session: false }),
  ratingController.checkRating
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  ratingController.addRating
);

module.exports = router;
