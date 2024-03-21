const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
    description : {
        type : String,
        required : true,
    },
    product_name : {
        type : String ,
        required : true,
        unique : true,
    } ,
    images : {
        type : Array ,
        required : true,
        unique : true,
    },
    rating : {
        type : String ,
        required : true,
    },
    reviews : {
        type : String ,
        required : true,
    },
    price : {
        type : String ,
        required : true,
    },
    colour : {
        type : Array ,
        required : true,
    },
    type : {
        type : String ,
        required : true ,
    },
    about : {
        type : Array ,
        required : true ,
    },
    avalaibility : {
        type : String ,
        required : true ,
    },
    brand : {
        type : String ,
        required : true ,
    }
});

module.exports = mongoose.model("Musicproduct" , musicSchema);