const express = require('express');
const port = 8000;
const app = express();
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
app.use(express.static('./assets'));

app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use('/', require('./routes/home'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.set(express.urlencoded());

app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("running on port: ", port);
})