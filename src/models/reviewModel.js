const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId ;

const reviewSchema = new mongoose.Schema({
    bookId: {type :ObjectId,
        ref :"Book"
    },
    reviewedBy: {
        type: String,
        required: true,
        default: "Guest",
        trim: true
    },
    reviewedAt:{
        type:Date,
        required:true
      },
    rating: {
        type: Number,
        required: true,

    },
    review:{
        type:String
    },
    isDeleted:{
        type: Boolean,
        default: false
    }


}) 

module.exports = mongoose.model('Review', reviewSchema)