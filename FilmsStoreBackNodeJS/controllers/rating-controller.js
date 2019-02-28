const User = require("../models/user");
const Film = require("../models/film");

const checkRating = async (request, response) => {
  const filmId = request.params["filmId"];
  const userName = request.user.userName;

  const rating = await User.findOne(
    {
      userName: userName,
      "ratedFilms.filmId": filmId
    },
    { "ratedFilms.$.rating": true }
  );

  response.send(rating ? true : false);
};

const addRating = async (request, response) => {
  const userName = request.user.userName;
  const { filmId, value } = request.body;

  const rating = await User.findOne({
    userName: userName,
    "ratedFilms.filmId": filmId
  });

  if (rating) {
    await User.updateOne(
      {
        userName: userName,
        "ratedFilms.filmId": filmId
      },
      { $set: { "ratedFilms.$.rating": value } }
    );
  } else {
    await User.updateOne(
      {
        userName: userName
      },
      {
        $push: { ratedFilms: { filmId: filmId, rating: value } }
      }
    );
  }

  const ratingsInfo = await User.find({
    "ratedFilms.filmId": filmId
  });

  const ratings = [];
  ratingsInfo.forEach(info =>
    info.ratedFilms.forEach(item => {
      if (item.filmId == filmId) {
        ratings.push(item.rating);
      }
    })
  );
  const newRating = ratings.reduce((a, b) => a + b, 0) / ratings.length;

  await Film.updateOne(
    {
      filmId: filmId
    },
    { $set: { rating: newRating } }
  );

  response.send();
};

module.exports = {
  checkRating,
  addRating
};
