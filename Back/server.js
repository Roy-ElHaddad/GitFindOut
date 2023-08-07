// if (process.env.NODE_ENV !== 'production') {
// 	require('dotenv').parse();
// } 

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const signUpRouter = require('./routes/signup');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URL  , { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb://127.0.0.1:27017' , { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/signup', signUpRouter);

// app.get('/login', (req, res) => {
// 	res.render('login');
// });

app.listen(process.env.PORT || 3000);
 