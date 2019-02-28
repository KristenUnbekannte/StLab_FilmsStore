const Film = require("../models/film");
const pageSize = 6;

const getFilms = async (request, response) => {
  const page = request.query.page ? request.query.page : 1;
  const filmsTotalCount = await Film.countDocuments();

  const films = await Film.find({ name: new RegExp(request.query.search, "i") })
    .sort({ filmId: 1 })
    .skip((page - 1) * pageSize)
    .limit(pageSize);

  const res = { films: films, totalCount: filmsTotalCount };

  response.send(res);
};

const getAllFilms = async (request, response) => {
  const filmsTotalCount = await Film.countDocuments();

  const films = await Film.find({
    name: new RegExp(request.query.search, "i")
  }).sort({ filmId: 1 });

  const res = { films: films, totalCount: filmsTotalCount };

  response.send(res);
};

const getFilmsById = async (request, response) => {
  const filmId = request.params["filmId"];
  const film = await Film.findOne(
    { filmId: filmId },
    { _id: false, comments: false, __v: false }
  );

  response.send(film);
};

const getTotalRating = async (request, response) => {
  const filmId = request.params["filmId"];
  const film = await Film.findOne({ filmId: filmId });

  response.send(film.rating.toString());
};

module.exports = {
  getFilms,
  getAllFilms,
  getFilmsById,
  getTotalRating
};
