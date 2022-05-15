const jwt = require('jsonwebtoken');
const { Users } = require('../models/users');

const authenticate = (req, res, next) => {
	try {
		const headerToken = req.headers.authorization ?? '';
		const accessToken = headerToken.split(' ');
		if (
			accessToken.length &&
			accessToken[1] !== 'undefined' &&
			accessToken[1] !== undefined &&
			accessToken[1] !== null
		) {
			jwt.verify(
				accessToken[1],
				process.env.TOKEN_SECRET,
				async (err, payload) => {
					console.log({ err, payload });
					if (err) {
						console.log('error', err);
						res.status(401).json({ message: 'Unauthorized' });
					} else {
						const user = await Users.findById(payload._id);
						console.log('payload', payload);
						console.log('user', user);
						if (user) {
							req.user = {
								...user.toObject(),
							};
							next();
						} else {
							res
								.status(401)
								.json({ message: "Sorry you aren't authorized  " });
						}
					}
				}
			);
		} else {
			res.status(401).json({ message: 'Token note provided ' });
		}
	} catch (error) {
		res.status(401).json({ message: 'Unauthorized', error: error.message });
	}
};

module.exports = authenticate;
