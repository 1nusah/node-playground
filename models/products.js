const mongoose = require('mongoose');

const product = new mongoose.Schema(
	{
		name: { type: String, required: true },
		title: { type: String, required: true },
		picture: { type: String, required: true },
		price: { type: Number, required: true },
	},
	{ timestamps: true }
);

const Product = mongoose.model('product', product);
module.exports = { Product };
