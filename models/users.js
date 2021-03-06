const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
	fullname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	role: {
		type: String,
		default: 'user'
	},
	googleid: {
		type: String,
		required: false
	},
	facebookid: {
		type: String,
		required: false
	},
});

const User = mongoose.model('users', userSchema);

module.exports = User;