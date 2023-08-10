
const express = require('express');
const cors = require('cors');
const app = express();
// const expressLayouts = require('express-ejs-layouts');
// const indexRouter = require('./routes/index');
// const loginRouter = require('./routes/login');
// const signUpRouter = require('./routes/signup');
// const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const userModel = require('./models/user');

// mongoose.connect(process.env.MONGODB_URL  , { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb://127.0.0.1:27017/test' , { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));
app.use(cors());
app.use(express.json());
// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');
// app.set('layout', 'layouts/layout');
// app.use(expressLayouts);
// app.use(express.static(__dirname + '/public'));
// app.use(bodyparser.urlencoded({ extended: false }));
// app.use('/', indexRouter);
// app.use('/login', loginRouter);
// app.use('/signup', signUpRouter);

// app.get('/login', (req, res) => {
// 	res.render('login');
// });
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await userModel.findOne({ email });
        if (user) {
            if (user.password === password) {
                console.log(user);
                return res.json({message : "Login Successful"});
            } else {
                return res.json( "The password is incorrect" );
            }
        } else {
            return res.json({ message: "User does not exist" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});


app.post('/signup', async(req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if a user with the provided email already exists
        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' }); // Conflict status
        }

        // If user doesn't exist, create a new user
        const newUser = await userModel.create({ name, email, password });
        res.status(201).json(newUser); // Created status
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

app.listen(process.env.PORT || 3000);
 