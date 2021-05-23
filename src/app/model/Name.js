const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Hue = new Schema({
    name: { type: String, default: 'hahaha' },
    age: { type: Number, min: 18, index: true },
    
  });

  module.exports = mongoose.model('Duong',Hue);
