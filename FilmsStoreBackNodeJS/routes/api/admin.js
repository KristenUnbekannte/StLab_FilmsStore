const express = require("express");
const passport = require("passport");

const adminController = require("../../controllers/admin-controller");
const router = express.Router();

const dataValidation = require('../../middleware/validation/validationSchema');
const postFilmSchema= require('../../validationSchemas/postFilmSchema');
const postImageSchema = require('../../validationSchemas/postImageSchema');

router
  .delete(
    "/film/:filmId",
    passport.authenticate("jwt", { session: false }),
    adminController.deleteFilm
  )
  .post(
    "/film",
    passport.authenticate("jwt", { session: false }),
    dataValidation(postFilmSchema),
    adminController.addFilm
  )
  .delete(
    "/image/:imageId",
    passport.authenticate("jwt", { session: false }),
    adminController.deleteImage
  )
  .post(
    "/image",
    passport.authenticate("jwt", { session: false }),
    dataValidation(postImageSchema),
    adminController.addImage
  );

module.exports = router;
