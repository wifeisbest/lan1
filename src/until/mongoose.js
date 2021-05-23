

module.exports = {
    muti : function ( mongoose){
        return mongoose.map(mongoose => mongoose.toObject());
    },
    simple : function ( mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
}

