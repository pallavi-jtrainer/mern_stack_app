const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/newusers", 
    {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connected to DB");
})

const userRoute = require('./routes/userRoute');
app.use('/users', userRoute);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})