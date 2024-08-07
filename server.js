const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const app = express()
const port = 3000


app.set('view engine','ejs')
app.set('views','./views')
app.use(express.static(path.join(__dirname,'/public')))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/',require('./routes/textRoutes'))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))