
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const createRubRouter = require('./routes/createRub');
const getRubRouter = require('./routes/getRub');
const removeRubRouter = require('./routes/removeRub');
// const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const userModel = require('./models/user');
const rubricSchema = require('./models/rubrique');

mongoose.connect(process.env.MONGODB_URL  , { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect('mongodb://127.0.0.1:27017/test' , { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/create-rubrique', createRubRouter);
app.use('/api/get-rubrique', getRubRouter);
app.use('/api/remove-rubrique', removeRubRouter);


app.listen(process.env.PORT || 3000);
 