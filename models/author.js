const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let AuthorSchema = new Schema({
		first_name: { type: String, required: true, max: 100 },
		family_name: { type: String, required: true, max: 100 },
		date_of_birth: { type: Date },
		date_of_death: { type: Date },
	});
	
// Virtual for author's full name does not get persisted to MongoDB
AuthorSchema
	.virtual('name')
	.get(function () {
		return this.family_name + ', ' + this.first_name;
	});

// Virtual for author's URL does not get persisted to MongoDB
AuthorSchema
	.virtual('url')
	.get(function () {
		return '/catalog/author/' + this._id;
	});

//Export model to be used elsewhere
module.exports = mongoose.model('Author', AuthorSchema);