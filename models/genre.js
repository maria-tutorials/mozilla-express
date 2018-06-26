var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
    name: { type: String, required: true, min: 3, max: 100 }
});

// Virtual for genre's URL does not get persisted to MongoDB
GenreSchema
    .virtual('url')
    .get(function () {
        return '/catalog/genre/' + this._id;
    });

//Export schema to be used elsewhere
module.exports = mongoose.model('Genre', GenreSchema);