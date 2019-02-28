const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
  userName: String,
  password: String,
  role: { type: String, default: "user" },
  ratedFilms: [{ filmId: Number, rating: Number }]
});

module.exports = mongoose.model("User", UserSchema);
