const User = require("../models/user");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

const existingUserError = "Such username has already been used";
const userNameError = "Invalid userName";
const passwordError = "Invalid password";

const register = async (request, response) => {
  const { userName, password } = request.body;
  const existingUser = await User.findOne({ userName: userName });

  if (existingUser) {
    return response.status(400).send(existingUserError);
  }

  const user = new User({
    userName: userName,
    password: password
  });

  const salt = await bcrypt.genSalt(saltRounds);
  user.password = await bcrypt.hash(user.password, salt);

  const newUser = await User.create(user);

  response.send({
    token: getToken(newUser),
    userName: newUser.userName,
    role: newUser.role
  });
};

const login = async (request, response) => {
  const { userName, password } = request.body;

  const user = await User.findOne({ userName: userName });
  if (!user) {
    return response.status(401).send(userNameError);
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return response.status(401).send(passwordError);
  }

  response.send({
    token: getToken(user),
    userName: user.userName,
    role: user.role
  });
};

getToken = user => {
  const payload = {
    userName: user.userName,
    password: user.password,
    role: user.role
  };
  return jwt.sign(payload, "secret", { expiresIn: 86400 });
};

module.exports = {
  register,
  login
};
