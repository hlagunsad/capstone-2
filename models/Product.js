const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema(
	{
		Name: {
			type: String,
			required: true
		},

		Description: {
			type: String,
			required: true
		},

		Price: {
			type: Number,
			required: true
		},

		isActive: {
			type: Boolean,
			default: true
		},
		createdOn: {
			type: Date,
			default: new Date()
		}
}, {timestamps: true})

module.exports = mongoose.model('Product', ProductSchema);