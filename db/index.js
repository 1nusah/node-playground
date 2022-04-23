const mongoose = require('mongoose');

mongoose.connect(
	'mongodb://localhost:27017/testdb',
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

// module.exports = connect;
