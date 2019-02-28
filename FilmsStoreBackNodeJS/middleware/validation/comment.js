const validator = require('validator');
const isEmpty = require('./isEmpty');

const validate = data => {
    let errors = {};

    data.message = !isEmpty(data.message) ? data.message : '';

    if (validator.isEmpty(data.message)) {
        errors.message = 'Message is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

const validateComment = (request, response, next) => {

    const { errors, isValid } = validate(request.body);

    if (!isValid) {

        return response.status(400).send({
            error: errors
        });
    }

    next();
};

module.exports = {
    validateComment,
};