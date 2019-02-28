const express = require("express");
const passport = require("passport");

const commentsController = require("../../controllers/comments-controller");
const { validateComment} = require('../../middleware/validation/comment');
const router = express.Router();

router.get("/:filmId", commentsController.getCommentsByFilmId);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  validateComment, 
  commentsController.addComment
);

module.exports = router;
