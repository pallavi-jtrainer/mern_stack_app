const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(express.json());

const db = require('./models')
const Role = db.role;
const dbConfig = require('./config/db.config');

//db connection
db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser:true, useUnifiedTopology:true
})
.then(()=> {
    console.log("Connected to DB");
    setupRoles();
})
.catch(err => {
    console.log("Connection Error", err);
    process.exit();
});
//routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

//port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})

function setupRoles() {
    Role.estimatedDocumentCount((err, count) => {
        if(!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if(err) {
                    console.log("Initialization error", err);
                }
                console.log("Added 'user' to Roles");
            });

            new Role({
                name: "admin"
            }).save(err => {
                if(err) {
                    console.log("Initialization error", err);
                }
                console.log("Added 'admin' to Roles");
            });
        }
    })
}