const Joi = require("joi");

const schema = {
  filmId: Joi.number().required(),
  imageId: Joi.number(),
  url: Joi.string().required()
};

module.exports = schema;
