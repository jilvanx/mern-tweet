const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
    "mongodb://goweekuser:goweekuser123432@ds019829.mlab.com:19829/goweek-backend",
    {
        useNewUrlParser: true
    }
);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});