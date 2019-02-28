const express = require("express");

const filmsController = require("../../controllers/films-controller");
const router = express.Router();

router.get("/", filmsController.getFilms);
router.get("/all", filmsController.getAllFilms);
router.get("/:filmId", filmsController.getFilmsById);
router.get("/rating/:filmId", filmsController.getTotalRating);

module.exports = router;
