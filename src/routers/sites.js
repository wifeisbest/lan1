const express = require('express');
const router = express.Router();

const sitesController = require('../app/controllers/SitesController');


router.get('/about',sitesController.about)



router.get('/',sitesController.index);

module.exports = router;
