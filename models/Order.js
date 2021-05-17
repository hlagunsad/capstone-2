const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema(
	{
		totalAmount: {
			type: Number,
			required: true
		},

		purchasedOn: {
			type: Date,
			default: new Date()
		},

		userId: {
			type: String,
			required: true
		},

		products: [
			{
			    productId: {
			    	type: String,
			    	required: false
			    },

			    quantity: {
			    	type: Number,
			    	required: false
			    },

			    subtotal: {
			    	type: Number,
			    	required: false
		    	}
		  	}
		]
})
module.exports = mongoose.model('Orders', OrderSchema);