const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { muti } = require('../../until/mongoose');
const { simple } = require('../../until/mongoose');
class AuthController {
    getRegister(req,res,next){
        res.render('auth/register')
    }
    getLogin(req,res,next){
        res.render('auth/login')
    }
    async  login(req, res, next) {
        try {
            const user = await User.findOne({email: req.body.email});
            if(!user){
                // Error : Email not found
            }
            if(bcrypt.compareSync(req.body.password, user.password)){
             const token = jwt.sign({userId: user._id},process.env.APP_SECRET);
               res.render('auth/logined',{layout: 'layout1', user: simple(user),token});
            }else{
                // Error : Password is not correct
            }
        } catch (error) {
           res.json(error)
        }
    }
    async  register(req, res, next) {
        try {
            const user = await User.create(req.body);
            
            res.render('auth/registed',{layout: 'layout1',user: simple(user) })

        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = new AuthController;
