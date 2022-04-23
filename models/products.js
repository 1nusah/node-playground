const mongoose = require('mongoose');

const product = new mongoose.Schema({
	name: String,
	title: String,
	picture: String,
	price: Number,
});

const Product = mongoose.model('product', product);
module.exports = { Product };
