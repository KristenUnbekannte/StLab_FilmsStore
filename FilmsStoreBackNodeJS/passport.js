const passport = require("passport");
const User = require("./models/user");

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";

passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    User.findOne({
      password: jwt_payload.password,
      userName: jwt_payload.userName
    })
      .then(user => {
        if (!user) {
          return done(null, false);
        } else {
          return done(null, user);
        }
      })
      .catch(err => console.log(err));
  })
);

module.exports = passport;
