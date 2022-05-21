const { Product } = require('../models/products');

module.exports = class ProductController {
	//add new product
	add = async (req, res) => {
		res.setHeader('Content-Type', 'application/json');
		console.log('data', req.body);

		try {
			const product = await Product.create({
				title: req.body.title,
				name: req.body.name,
				price: req.body.price,
				picture: req.body.picture,
			});
			res.status(201).json({ message: 'Product added succesfully' });
			console.log('product', product);
		} catch (error) {
			return res.status(400).json(error);
		}

		// console.log('products', products);
	};
	//delete product
	delete = async (req, res) => {
		const { id } = req.params;

		try {
			const nigga = await Product.findByIdAndDelete(id);
			console.log('deleted Items', nigga);
			res.status(200).json({ message: 'Product deleted successfully' });
		} catch (error) {
			res.status(400).json({ message: 'Sorry that failed please try again' });
			console.log('error', error);
		}
	};

	//update product
	update = async (req, res) => {
		const { id } = req.params;
		const { body } = req;
		const productExists = await Product.findById(id);

		if (productExists) {
			try {
				await Product.updateOne(id, {
					title: body.title,
					name: body.name,
					price: body.price,
					picture: body.picture,
				});
				res.status(200).json({ message: 'Product updated successfully' });
			} catch (error) {
				res.status(400).json({ message: 'Sorry that failed please try again' });

				console.log('error', error);
			}
		}
		return res
			.status(404)
			.json({ message: 'Product not found. It may have been moved' });
	};

	//get single product
	getProduct = async (req, res) => {
		const { id } = req.params;
		try {
			const product = await Product.findById(id);
			res.status(200).json(product);
		} catch (error) {
			console.log('error');
			res.status(400).json({ message: 'Sorry that failed please try again' });
		}
	};

	// show all products
	showAllProducts = async (req, res, next) => {
		let { page, limit } = req.query;
		if (!page) {
			page = 1;
		}
		if (!limit) {
			limit = 1;
		}
		limit = parseInt(limit);
		const offset = (page - 1) * limit;
		try {
			const products = await Product.find().skip(offset).limit(limit);
			const totalNumberOfItems = await Product.countDocuments();
			res.status(200).json({ products, total: totalNumberOfItems, page: page });
		} catch (error) {
			res.status(400).json(error.message);
		}
	};
};
