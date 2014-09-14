'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Note Schema
 */
var NoteSchema = new Schema({
  title: String,
  content: String,
  user: String
});


mongoose.model('Note', NoteSchema);