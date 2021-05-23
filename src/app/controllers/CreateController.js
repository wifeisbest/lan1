const Hoa = require('../model/Name');
const {muti} = require('../../until/mongoose');
const{simple} = require('../../until/mongoose');

class createController {
    index (req, res , next){
        res.render('create');
    }
}


module.exports = new createController;
