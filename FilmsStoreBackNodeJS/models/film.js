const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FilmsSchema = Schema({
  filmId: Number,
  name: String,
  country: String,
  year: Number,
  genre: String,
  producer: String,
  imageUrl: String,
  videoUrl: String,
  rating: Number,
  description: String,
  comments: [
    {
      userName: String,
      message: String,
      date: String
    }
  ]
});

module.exports = mongoose.model("Film", FilmsSchema);
