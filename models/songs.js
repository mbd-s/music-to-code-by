var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var SongSchema = new Schema({
  title: String,
  artist: String,
  genre: Array, // [String]
  link: String
});

var Songs = mongoose.model('Songs', SongSchema);

module.exports = Songs;
