var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var TodoListSchema = new Schema({
title: {
type: String,
default: '',
trim: true,
required: "Entrer un titre"
},
creator: {
type: Schema.ObjectId,
ref: 'User'
}
});

module.exports = mongoose.model('Todo', TodoSchema);