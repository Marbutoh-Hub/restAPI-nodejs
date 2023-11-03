// ENVIRONMENT 
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const middlewareLogRequest = require('./middleware/log');
const user = require('./routes/usersRouter.js');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// MENGUBAH FORMAT DATA MENJADI JSON
app.use(bodyParser.json())

// MIDDLEWARE
app.use(middlewareLogRequest);
// USERS
app.use('/users', user);
app.get('/',(req, res) => {
    res.json({
        message: 'Ini adalah Home GET method'
    })
});


// Setting port 
const PORT = process.env.PORT || 4000;
// buat server nya
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));