const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: false
		},
		lastName: {
			type: String,
			required: false
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true
		},
		isAdmin: {
			type: Boolean,
			default: false
		},
		mobileNo: {
			type: String,
			required: false
		}

});
module.exports = mongoose.model('User', UserSchema);