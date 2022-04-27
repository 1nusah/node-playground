const { number, object, string } = require('yup');

//add product validation
const addProductSchema = object({
	title: string().required().label('Title'),
	name: string().required().label('Name'),
	picture: string().required().label('Picture'),
	price: number().required().label('Price'),
});

const loginSchema = object({
	email: string().email().required().label('Email'),
	password: string().required().label('Password'),
});

module.exports = { addProductSchema, loginSchema };
