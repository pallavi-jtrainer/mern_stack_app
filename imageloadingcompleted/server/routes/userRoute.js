const router = require('express').Router();
const multer = require('multer');
const {v4: uuidv4} = require('uuid');

let path = require('path');
let User = require('../models/user.model');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images');
    },
    filename: function(req, file, cb) {
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, callback) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        callback(null, true);
    } else {
        callback(null, false);
    }
}

let uploadContent = multer({storage, fileFilter});

router.route('/new').post(uploadContent.single('photo'), (req, res) => {
    const name = req.body.name;
    const photo = req.file.filename;

    const data = {name, photo};

    const newUser = new User(data);
    console.log(newUser);
    newUser.save()
     .then(() => {
         res.json('User Added Successfully');
     })
     .catch(err => res.status(400).json("Error: " + err ));

});

module.exports = router;