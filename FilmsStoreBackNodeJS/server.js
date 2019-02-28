const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const mongoose = require("mongoose");
const cors = require("cors");

const mainRouter = require("./routes");
const passport = require("./passport");
const socketEvents = require("./socket/socketEvents");

app.io = io;

app
  .use(passport.initialize())
  .use(express.json())
  .use(cors())
  .use(mainRouter);

socketEvents(io);

mongoose.connect(
  "mongodb://localhost:27017/filmsstoredb",
  { useNewUrlParser: true },
  err => {
    if (err) {
      throw err;
    }

    const port = 58038;
    http.listen(port, () => {
      console.log(`Run server on port ${port}!`);
    });
  }
);
