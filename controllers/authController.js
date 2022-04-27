const { Users } = require('../models/users');

module.exports = class AuthController {
	signUp = async (req, res, next) => {
		const { body } = req;
		try {
			const newUser = await Users.create({
				email: body.email,
				password: body.password,
			});
			res.status(201).send({
				message: 'User Created Successfully',
				token: 'jkdskaljdnfakjdakl',
			});
		} catch (error) {
			res.send(400).json(error);
		}
	};

	login = async (req, res, next) => {
		try {
			const user = await Users.findOne({
				email: req.body.email,
			});
			if (!user) {
				res.status(404).json({
					message: 'User does not exsit',
				});
				return;
			}
			res.status(200).send({
				token: 'hellooaodifa;ldaoldfakfdaldfada',
			});
		} catch (error) {
			res.status(400).json({ error });
		}
	};
};
