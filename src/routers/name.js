const express =require('express');
const routerName = express.Router();

const nameController = require('../app/controllers/NameController');


routerName.post('/createName',nameController.postCreate);
routerName.get('/:slug',nameController.showDetai);
routerName.get('/',nameController.index);



module.exports = routerName;
