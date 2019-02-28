const express = require("express");

const imagesController = require("../../controllers/images-controller");
const router = express.Router();

router.get("/:filmId", imagesController.getImagesByFilmId);

module.exports = router;
