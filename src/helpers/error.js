//Helper errors for api
class BaseError extends Error {
    constructor(status, errors) {
        super();
        this.status = status;
        this.errors = errors;
    }
}

class ValidationError extends BaseError {
    constructor(errors) {
        const status = 400;
        super(status, errors)
    }
}

module.exports = {
    BaseError,
    ValidationError,
};
