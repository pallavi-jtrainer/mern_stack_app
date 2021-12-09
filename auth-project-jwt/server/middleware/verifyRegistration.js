const db = require('../models')
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateEmailorUsername = (req, res, next) => {
    User.findOne({
        username: req.body.username
    }).exec((err, data) => {
        if(err) {
            return res.status(500).send({message: err});
        }

        if(data) {
            return res.status(400).send({message: "Username already exists"});
        }
    });

    User.findOne({
        email: req.body.email
    }).exec((err, data) => {
        if(err) {
            return res.status(500).send({message: err});
        }

        if(data) {
            return res.status(400).send({message: "Email already exists"});
        }
    });
    next();
};

checkRoleExists = (req,res, next) => {
    if(req.body.roles) {
        if(!ROLES.includes(req.body.roles)) {
            return res.status(400).send({message: `${req.body.roles} does not exist`});
        }
    }

    next();
};

const verifyRegistration = {checkDuplicateEmailorUsername, checkRoleExists };

module.exports = verifyRegistration;