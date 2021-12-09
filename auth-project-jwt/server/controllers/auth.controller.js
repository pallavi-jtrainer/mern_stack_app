const config = require('../config/auth.config');
const db = require('../models');
const User = db.user;
const Role = db.role;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.login = (req, res) => {
    User.findOne({
        username: req.body.username
    }).populate("roles", "name")
    .exec((err, user) => {
        if(err) {
            return res.status(500).send({message: err})
        }

        if(!user) {
            return res.status(404).send({message: "User not found"})
        }

        var validPassword = bcrypt.compareSync(
            req.body.password, user.password
        );

        if(!validPassword) {
            return res.status(401).send({
                message: "Invalid Password",
                accessToken: null
            })
        }

        var token = jwt.sign({id: user.id}, config.secret, {expiresIn: 86400});

        var permissions = [];
        console.log(user.roles)
        for(let i = 0; i < user.roles.length; i++) {
            permissions.push("ROLE_" + user.roles[i].name.toUpperCase());
        }

        return res.status(200).send({
            id: user._id,
            username: user.username,
            email: user.email,
            roles: permissions,
            accessToken: token
        })
    })
};

exports.register = (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    });

    newUser.save((err, user) => {
        if(err) {
            return res.status(500).send({message: err});
        }

        if(req.body.roles) {
            Role.find({
                name: {$in: req.body.roles}
            }, (err, role) => {
                if(err) {
                    return res.status(500).send({message: err});
                }

                user.roles = role.map( r => r._id);
                user.save(err => {
                    if(err) {
                        return res.status(500).send({message: err});
                    }

                    res.status(200).send("User Registered Successfully");
                })
            })
        } else {
            Role.findOne({name: "user"}, (err, role) => {
                if(err) {
                    return res.status(500).send({message: err});
                }

                user.roles = [role._id];
                user.save(err => {
                    if(err) {
                        return res.status(500).send({message: err});
                    }
                    res.status(200).send("User Registered Successfully");
                })
            })
        }
    })
}