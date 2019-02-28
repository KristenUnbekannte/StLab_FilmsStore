const Image = require("../models/image");

const getImagesByFilmId = async (request, response) => {
  const filmId = request.params["filmId"];
  const images = await Image.find({ filmId: filmId });

  response.send(images);
};

module.exports = {
  getImagesByFilmId
};
