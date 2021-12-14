const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes')

require('./models');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT || 5000;

// app.get('/', (req, res) => {
//     res.send("WORKING");
// })

app.use(routes);
app.listen(PORT, ()=>{
    console.log(`Server is listening on port: ${PORT}`);
})