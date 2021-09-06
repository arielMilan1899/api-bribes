//Bribes controller.js
const {body, validationResult} = require('express-validator');
const {ValidationError} = require("../helpers/error");

const post = (req) => {

    // validate request
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        //Pass the errors to next middleware
        throw new ValidationError(errors.array());
    }

    const {queue} = req.body;
    const numbers = queue.split(' ').map(Number);

    return Promise.resolve(numbers);
};
const validate = () => {

    //Validate queue field
    //queue must be an not empty string
    const queue = body('queue')
        .isString().withMessage('queue field must be a valid string').bail()
        .not().isEmpty().withMessage('queue field must not be empty')
        .custom(input => {

            const isInteger = num => {
                return !isNaN(num)
            };

            return input.split(' ').every(isInteger);
        }).withMessage('queue field must contains only numbers');

    return [queue];
};

module.exports = {
    post,
    validate
};

