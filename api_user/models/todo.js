
var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var TodoSchema = new Schema({
created: {
type: Date,
default: Date.now
},
title: {
type: String,
default: '',
trim: true,
required: "Entrer un titre"
},
comment: {
type: String,
default: '',
trim: true
},
creator: {
type: Schema.ObjectId,
ref: 'User'
},
completed: {
type: Boolean,
default: false
}
});

module.exports = mongoose.model('Todo', TodoSchema);