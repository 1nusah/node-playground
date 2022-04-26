const validate = (schema) => (req, res, next) => {
	schema
		.validate(req.body, { abortEarly: false })
		.then(() => {
			next();
		})
		.catch((error) => {
			console.log(error.message);

			const response = {
				message: 'The given data was invalid',
				errors: [],
			};
			error.inner.forEach((item) => {
				response.errors.push({ field: item.path, errors: item.errors });
			});

			res.status(422).json(response);
		});
};

module.exports = validate;
