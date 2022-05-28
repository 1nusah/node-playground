const mongoose = require('mongoose');
const { DB_URL } = require('../config/env');
mongoose.connect(
	DB_URL,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	() => {
		console.log('connected');
	},
	(e) => {
		console.error('error', e);
	}
);
