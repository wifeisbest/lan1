const Hoa = require('../model/Name');
const {muti}= require('../../until/mongoose');
const {simple}= require('../../until/mongoose');

class NameController {
    
    index(req,res){
        res.send('please add a slug in your database')
    }

    showDetai(req, res, next){
        Hoa.findOne({slug: req.params.slug})
            .then(duongs => res.render('showDetail',{
                duongs: simple(duongs)
            }))
            .catch(next)
    }

    // [POST] /name/create
    postCreate(req, res, next){
        
        const hoa = new Hoa(req.body);
        hoa.save()
            .then(()=> res.redirect('/'))
            .catch(next);
    }



    






}

module.exports= new NameController;
