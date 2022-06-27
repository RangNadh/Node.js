var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: String,
    published:{
        type: Date,
        default: Date.now
    },
    keywords: Array,
    published: Boolean,
    author:{
        type: Schema.Objectid,
        ref: 'User'
    },
    
});
module.exports = mongoose.model('Book', BookSchema);