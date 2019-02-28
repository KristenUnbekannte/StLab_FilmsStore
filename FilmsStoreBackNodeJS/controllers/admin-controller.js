const Film = require("../models/film");
const Image = require("../models/image");

const deleteFilm = async (request, response) => {
  if (request.user.role == "admin") {
    const filmId = request.params["filmId"];
    const film = await Film.findOneAndDelete({ filmId: filmId });

    film ? response.status(200).send(film.name) : response.sendStatus(400);
  } else {
    response.status(401).send();
  }
};

const addFilm = async (request, response) => {
  if (request.user.role == "admin") {
    if (request.body.filmId === 0) {
      const filmWithMaxId = await Film.findOne().sort({ filmId: -1 });
      request.body.filmId = filmWithMaxId.filmId + 1;

      await Film.create({ ...request.body });
    } else {
      await Film.updateOne(
        {
          filmId: request.body.filmId
        },
        { ...request.body }
      );
    }

    response.status(200).send();
  } else {
    response.status(401).send();
  }
};

const deleteImage = async (request, response) => {
  if (request.user.role == "admin") {
    const imageId = request.params["imageId"];

    const deletedImage = await Image.findOneAndDelete({ imageId: imageId });
    deletedImage
      ? response.status(200).send(deletedImage)
      : response.sendStatus(400);
  } else {
    response.status(401).send();
  }
};

const addImage = async (request, response) => {
  if (request.user.role == "admin") {
    const imageId = request.body.imageId;

    if (imageId === 0) {
      const imageWithMaxId = await Image.findOne().sort({ imageId: -1 });
      request.body.imageId = imageWithMaxId.imageId + 1;

      await Image.create({ ...request.body });
    } else {
      await Image.updateOne(
        {
          imageId: imageId
        },
        { ...request.body }
      );
    }

    response.status(200).send();
  } else {
    response.status(401).send();
  }
};

module.exports = {
  deleteFilm,
  addFilm,
  deleteImage,
  addImage
};
