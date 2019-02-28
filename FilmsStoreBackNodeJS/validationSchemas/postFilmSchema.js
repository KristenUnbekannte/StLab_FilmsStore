const Joi = require("joi");

const schema = {
  filmId: Joi.number(),
  name: Joi.string().required(),
  country: Joi.string()
    .min(3)
    .required(),
  year: Joi.number()
    .min(1897)
    .max(new Date().getFullYear())
    .required(),
  genre: Joi.string()
    .min(3)
    .required(),
  producer: Joi.string()
    .min(3)
    .required(),
  imageUrl: Joi.string().required(),
  videoUrl: Joi.string().required(),
  rating: Joi.number(),
  description: Joi.string()
    .min(20)
    .required(),
  comments: Joi.array().items(Joi.object())
};

module.exports = schema;
