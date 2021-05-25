const Hoa = require('../model/Name');
const { muti } = require('../../until/mongoose');
const { simple } = require('../../until/mongoose');
class SiteController {
    index(req,res,next){
        Hoa.find({})
            .then(duongs =>{   
                res.render('home',{duongs: muti(duongs)})
            })
            .catch(next)
    }
    about(req,res,next){
       
        Hoa.findOne({slug: req.params.slug})
            .then(duongs => res.render('about',{layout: 'layout1',duongs: simple(duongs)}))
            .catch(next)
        
    }
    token(req,res,next){
       
        res.render('token').cookie('cart', {items: [1,2,3] }); 
        
    }
}

module.exports = new SiteController;
