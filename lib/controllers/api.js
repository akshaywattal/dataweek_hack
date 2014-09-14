'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Note = mongoose.model('Note');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};


// Store Notes

// export.createNote = function(req, res){
// 	var newNote = new Note(req.body);
//   	newNote.save(function(err) {
//     if (err) return res.json(400, err);
//    	else return res.json(201);	
//   });
// };

// export.getNotes = function(req, res){
	
//   	return Note.find(function (err, things) {
//     if (!err) {
//       return res.json(things);
//     } else {
//       return res.send(err);
//     }
//   });
// };