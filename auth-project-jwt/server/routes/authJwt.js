const jwt = require('jsonwebtoken');
const db = require('../models');
const authConfig = require('../config/auth.config');

const User = db.user;
const Role = db.role;

verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token'];

    if(!token) {
        return res.status(403).send({message: "No Token Provided"});
    }

    jwt.verify(token, authConfig.secret, (err, decodedKey) => {
        if(err) {
            return res.status(401).send({message: "Unauthorized!"});
        }

        req.userId = decodedKey.id;
    });
    next();
};

isAdmin = (req, res, next) => {
    User.findById(req.userId).exec((err, data) => {
        if (err) {
            return res.status(500).send({message: err});
        }

        Role.find({
            _id: {$in: data.roles}
        }, (err, roles) => {
            if(err) {
                return res.status(500).send({message: err});
            }

            const content = roles.filter((role) => role.name === "admin")

            if(content.length > 0) {
                return res.status(200).send({message: "Welcome Admin"});
            } else {
                return res.status(403).send({message: "Admin Role Required"})
            }
        })
    });
    next();
};

const authJwt = { verifyToken, isAdmin };

module.exports = authJwt;