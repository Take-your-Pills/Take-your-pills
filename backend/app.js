require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const connection = require('./config');
const drugsRouter = require('./routes/drugs');
const hoursRouter = require('./routes/hours');
const prescriptionRouter = require('./routes/prescription');
const userRouter = require('./routes/user');

app.use(morgan('dev'));
app.use(express.json())

connection.connect(err => {
    err ?
        console.log(err)
        :
        console.log('You are successfully connected to the database!')
})

app.use('/user', userRouter);
app.use('/drugs', drugsRouter);
app.use('/hours', hoursRouter);
app.use('/prescription', prescriptionRouter);

// implement the API part
app.get("/api", (req, res) => {
    res.send("Hello World");
})

// launch the node server
let server = app.listen(process.env.PORT || 5000, function () {
    console.log('Listening on port ' + server.address().port);
});