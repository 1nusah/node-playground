const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const { PORT } = require('./config/env');
//file routes
require('./db');
var bodyParser = require('body-parser');

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({ limit: '4mb', extended: true }));
app.use(bodyParser.json());

//dot env
require('dotenv').config();

//individual routes
const adminRoutes = require('./routes/admin');
const clientRoutes = require('./routes/shop');
const authRoutes = require('./routes/users');
//req parser
app.use(express.urlencoded({ extended: true }));
app.use(logger('combined'));
app.use(cors());
// if i want to make the admin routes handler to work on only routes starting with admin,  have to do below
// app.use('/admin',adminRoutes)

app.use(adminRoutes.router);
app.use(clientRoutes);
app.use('/auth', authRoutes);

//404 route

app.use('/health', (req, res) => {
	res.status(200).json({ message: 'Ok' });
	// next();
});
app.listen(PORT || 4040);
