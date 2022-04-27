const mongoose = require('mongoose');

const user = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		password: { type: String, required: true },
	},
	{ timestamps: true }
);

const Users = mongoose.model('user', user);
module.exports = { Users };
