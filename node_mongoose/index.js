const mongoose = require("mongoose");

const Schema = mongoose.Schema;
var userSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number
});

var userModel = mongoose.model('users', userSchema);
var user1 = new userModel({firstName: "Alex", lastName: "Fischer", age: 29});

const CONNECTION_URL = "mongodb://localhost:27017/users";

let cb = (err) => {
    if(!err) {
        //console.log("connection successful");
        console.log("connection state: " + conn.readyState);
    } else {
        console.log("connection unsuccessful");
    }
} 

mongoose.connect(CONNECTION_URL, cb);

let conn = mongoose.connection;

var findRecords = (err, data) => {
    console.log("Total Records found: " + data.length);
    data.forEach((each) => {
        console.log(each);
    });
}
userModel.find(findRecords);

// user1.save((err, user1) => {
//     if(!err) {
//         console.log("Document Saved");
//     } else {
//         console.log(err);
//     }
// });
