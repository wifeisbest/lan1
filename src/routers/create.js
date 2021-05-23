const express = require('express');
const CreateRouter = express.Router();

const createName = require('../app/controllers/CreateController');

CreateRouter.get('/', createName.index);

module.exports = CreateRouter;
