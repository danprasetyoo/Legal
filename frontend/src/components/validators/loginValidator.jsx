// src/validators/loginValidator.js
const validateLogin = ({ username, password }) => {
    const errors = {};
    if (!username) {
        errors.username = 'Username is required';
    }
    if (!password) {
        errors.password = 'Password is required';
    }
    return errors;
};

export default validateLogin;