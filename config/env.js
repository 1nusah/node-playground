// env variables
const { DB_URL } = process.env;

const TOKEN_SECRET = process.env.TOKEN_SECRET;
const PORT = process.env.PORT;
module.exports = {
	TOKEN_SECRET,
	PORT,
	DB_URL,
};
