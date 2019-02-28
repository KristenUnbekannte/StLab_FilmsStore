const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = Schema({
  filmId: Number,
  imageId: Number,
  url: String
});

module.exports = mongoose.model("Image", ImageSchema);
