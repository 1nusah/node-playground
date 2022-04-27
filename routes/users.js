const express = require('express');

const AuthController = require('../controllers/authController');
const validate = require('../middlewares/validate');
const { loginSchema } = require('../utils/validation');

const AuthControllerInstance = new AuthController();

const authRoutes = express.Router();

authRoutes.post(
	'/login',
	[validate(loginSchema)],
	AuthControllerInstance.login
);

authRoutes.post(
	'/signup',
	[validate(loginSchema)],
	AuthControllerInstance.signUp
);

module.exports = authRoutes;
