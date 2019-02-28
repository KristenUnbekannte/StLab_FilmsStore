const Film = require("../models/film");

const getCommentsByFilmId = async (request, response) => {
  const filmId = request.params["filmId"];
  const film = await Film.findOne({ filmId: filmId });

  response.send(film.comments);
};

const addComment = async (request, response) => {
  const { filmId, message } = request.body;

  const comment = {
    userName: request.user.userName,
    message: message,
    date: new Date()
  };

  await Film.updateOne(
    {
      filmId: filmId
    },
    {
      $push: {
        comments: comment
      }
    }
  );

  request.app.io
    .in(filmId)
    .emit("GetComment", { filmId: filmId, comment: comment });
  response.send();
};

module.exports = {
  getCommentsByFilmId,
  addComment
};
