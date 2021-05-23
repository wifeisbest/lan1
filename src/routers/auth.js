const express = require('express');
const AuthRouter = express.Router();

const authController = require('../app/controllers/AuthController')

AuthRouter.get('/register', authController.getRegister);
AuthRouter.get('/login', authController.getLogin);
AuthRouter.post('/login', authController.login);
AuthRouter.post('/register', authController.register);

module.exports =AuthRouter;
