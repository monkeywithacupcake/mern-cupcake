const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const keys = require('../../config/keys');
const Baker = require('../models/baker');

exports.find_baker = (req, res, next) => {
    console.log('trying to find baker', res.locals.user);
    Baker.findById(res.locals.user.userId)
        .exec()
        .then(baker => {
            console.log('baker', baker);
            if (!baker) {
                return res.status(404).json({
                    message: 'No Baker'
                });
            }
            res.status(200).json({
                message: 'Found a Baker',
                foundBaker: {
                    id: baker._id,
                    name: baker.name,
                    bakery: baker.bakery_name
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};

exports.signup_baker = (req, res, next) => {
    console.log('try to signup a baker');
    Baker.find({ email: req.body.email })
        .exec()
        .then(baker => {
            if (baker.length >= 1) {
                return res.status(409).json({
                    message: 'A baker with that email already exists'
                });
            } else {
                // not found, create a new user
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({ error: err });
                    } else {
                        // have a hashed password!
                        const baker = new Baker({
                            _id: mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash,
                            name: req.body.name,
                            bakery_name: req.body.bakery_name
                        });
                        baker
                            .save()
                            .then(result => {
                                const token = jwt.sign(
                                    {
                                        userId: result._id
                                    },
                                    keys.jwtKey,
                                    {
                                        expiresIn: '1h'
                                    }
                                );
                                console.log(result);
                                res.status(201).json({
                                    message: 'creating a new baker',
                                    token: token,
                                    createdBaker: {
                                        id: result._id,
                                        name: result.name,
                                        bakery_name: result.bakery_name
                                    }
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({ error: err });
                            });
                    } // end of success hash
                }); // end of bcrypt
            } // end of user not found
        }); // end of then user block
};

exports.login_baker = (req, res, next) => {
    Baker.find({ email: req.body.email })
        .exec()
        .then(baker => {
            if (baker.length < 1) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            } else {
                // we have a user
                bcrypt.compare(
                    req.body.password,
                    baker[0].password,
                    (err, result) => {
                        if (err) {
                            return res.status(401).json({
                                message: 'Auth failed'
                            });
                        }
                        if (result) {
                            // we have a match
                            // need a jsonwebtoken
                            const token = jwt.sign(
                                {
                                    userId: baker[0]._id
                                },
                                keys.jwtKey,
                                {
                                    expiresIn: '1h'
                                }
                            );
                            return res.status(200).json({
                                message: 'Auth successful',
                                loggedinBaker: {
                                    id: baker[0]._id,
                                    name: baker[0].name,
                                    bakery: baker[0].bakery_name
                                }, // added 201803
                                token: token
                            });
                        }
                        res.status(401).json({
                            message: 'Auth failed'
                        });
                    }
                );
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};
