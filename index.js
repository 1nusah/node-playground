const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
//file routes
require('./db');
var bodyParser = require('body-parser');

// configure the app to use bodyParser()
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(bodyParser.json());
const adminRoutes = require('./routes/admin');
const clientRoutes = require('./routes/shop');

//req parser
app.use(express.urlencoded({ extended: true }));
app.use(logger('combined'));
app.use(cors());
// if i want to make the admin routes handler to work on only routes starting with admin,  have to do below
// app.use('/admin',adminRoutes)

app.use(adminRoutes.router);
app.use(clientRoutes);

//404 route

app.use('/', (req, res, next) => {
	res.status(404).json({ message: 'invalid' });
});

app.listen(4040);
