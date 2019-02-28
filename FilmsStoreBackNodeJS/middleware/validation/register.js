const validator = require("validator");
const isEmpty = require("./isEmpty");

const validate = data => {
  let errors = {};

  data.userName = !isEmpty(data.userName) ? data.userName : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!validator.isLength(data.userName, { min: 4, max: 30 })) {
    errors.userName = "Username must be between 5 and 30 characters";
  }

  if (validator.isEmpty(data.userName)) {
    errors.userName = "Username is required";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

const validateRegister = (request, response, next) => {
  const { errors, isValid } = validate(request.body);

  if (!isValid) {
    return response.status(400).send({
      error: errors
    });
  }

  request.errors = errors;

  next();
};

module.exports = {
  validateRegister: validateRegister
};
