const express = require('express');
const app = express();
const http = require('http').Server(app);
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const ejs = require('ejs');
require('dotenv').config();

app.set('views', __dirname + '/views');
app.set('view engine', ejs);

app.set('layout', 'views/layout');
app.set('layout extractScripts', true);
app.use(expressLayouts);
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false
        },
        name: 'vassili web server'
    })
);

app.use('/static', express.static(__dirname + '/public'));

const mainRoute = require('./routes/mainRoute');

app.use('/', mainRoute);

http.listen(9504, () => {
    console.log('http server start');
});
