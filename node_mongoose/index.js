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

//count documents
userModel.count({age: {$lt: 30}}, (err, num) => {
    console.log("Number of documents in the users Schema: " + num);
} );

// var findRecords = (err, data) => {
//     console.log("Total Records found: " + data.length);
//     data.forEach((each) => {
//         console.log(each);
//     });
// }

//update a single document
// userModel.findByIdAndUpdate("6194d8455943b490fa456905", {age: 25}, (err, data) => {
//     if(!err) {
//         console.log(data);
//     } else {
//         console.log(err);
//     }
// });

// userModel.updateOne({_id: mongoose.Types.ObjectId("6194d69460153091321ae488")}, {age: 30}, (err, data) => {
//     if(!err) {
//         console.log(data);
//     } else {
//         console.log(err);
//     }
// });

//get all records
//userModel.find(findRecords);

//get single record
// userModel.findById("6194d8455943b490fa456905", "age firstName lastName",
//     (err, data) => {
//         if(!err) {
//             console.log(data);
//         } else {
//             console.log(err);
//         }
//     });

//insert a document
// user1.save((err, user1) => {
//     if(!err) {
//         console.log("Document Saved");
//     } else {
//         console.log(err);
//     }
// });
