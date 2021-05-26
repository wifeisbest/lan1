require('dotenv').config();

// Require Framwork
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const port = 3000;

// =================================================//
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded(
    {extended: true}
));
app.use(express.json());

app.engine('.hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'resourse','views'));
// =================== require local filles ========================//
const Router = require('./routers/index');
const db = require('./config/db/index');

db.connect();
Router(app);


app.listen(port, () => console.log(`App listen ${port}`));