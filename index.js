var express = require("express");
var app = express();
var body_parser = require("body-parser");
var session = require('express-session')

app.use(body_parser.urlencoded({
    limit: '50mb',
    extended: true
}))
app.use(body_parser.json({limit: '50mb'}))
app.use(express.urlencoded({ extended: true }));
app.set("view engine", 'ejs');
app.use(express.static("public"));

app.use(session({
    secret: '#C4tf1sh!',
    resave: true,
    saveUninitialized: false,
    secure: true,
    maxAge: null
}));

//Routes
app.use(require('./routes/routes.js'))

var porta = process.env.PORT

app.listen(porta, function (err) {
    if (err) console.log(err);
    console.log("Online on Port = " + porta);
});
