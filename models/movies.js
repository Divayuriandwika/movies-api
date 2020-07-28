const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moviesSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	poster: {
		type: String,
		required: true
	},
	resume: {
		type: String,
		required: true
    },
    rating: {
		type: Number,
		required: true
    },
    genre: {
		type: String,
		required: true
    },
    year: {
        type: Number,
        required: true
    }
});

const Movies = mongoose.model('movies', moviesSchema);

module.exports = Movies;