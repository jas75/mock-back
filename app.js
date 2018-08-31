//dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

const port = 3000;

// routes
const user = require('./src/routes/users');


// Middleware
app.use(cors());
app.use(bodyParser.json());

// route
app.get("/", (req, res) => {
	res.send("invalid endpoint");
});

app.listen(port, () => {
	console.log("...data")
});

