const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const keys = require('../../config/keys');
const User = require('../models/user');
const Monkey = require('../models/monkey');
const Cupcake = require('../models/cupcake');

exports.find_user = (req, res, next) => {
    console.log('trying to find user', res.locals.user);
    User.findById(res.locals.user.userId)
        .exec()
        .then(user => {
            console.log('user', user);
            if (!user) {
                return res.status(404).json({
                    message: 'No User'
                });
            }
            res.status(200).json({
                message: 'Found a User',
                foundUser: {
                    id: user._id,
                    name: user.name
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};

exports.signup_user = (req, res, next) => {
    console.log('try to signupuser');
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                // if just use if(user), will get an empty array none
                // a user already exists with this email!!
                return res.status(409).json({
                    message: 'A user with that email already exists'
                });
            } else {
                // not found, create a new user
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({ error: err });
                    } else {
                        // have a hashed password!
                        const user = new User({
                            _id: mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash,
                            name: req.body.name
                        });
                        user
                            .save()
                            .then(result => {
                                const token = jwt.sign(
                                    {
                                        email: result.email,
                                        userId: result._id
                                    },
                                    keys.jwtKey,
                                    {
                                        expiresIn: '1h'
                                    }
                                );
                                console.log(result);
                                res.status(201).json({
                                    message: 'creating a new user',
                                    token: token,
                                    createdUser: {
                                        id: result._id,
                                        name: result.name,
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

exports.login_user = (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            } else {
                // we have a user
                bcrypt.compare(
                    req.body.password,
                    user[0].password,
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
                                    email: user[0].email,
                                    userId: user[0]._id
                                },
                                keys.jwtKey,
                                {
                                    expiresIn: '1h'
                                }
                            );
                            return res.status(200).json({
                                message: 'Auth successful',
                                loggedinUser: {
                                    id: user[0]._id,
                                    name: user[0].name
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

exports.show_new_monkey = (req, res, next) => {
    const userid = req.params.userID;
    const tokenid = res.locals.user.userId;
    console.log("comparing: ", userid, tokenid)
    if (userid !== tokenid ) { return res.status(404).json({ message: 'Unauthorized'})}
    console.log('Made it to the API for SHOW create_user_monkey');
    User.findById(userid, function(err, foundUser) {
        if (err) {
            req.flash('error', err.message)
            res.redirect('back');
        } else {
            console.log('trying to show');
            console.log(foundUser);
            res.render('user/addcup/new', { user: foundUser });
        }
    });
    User.findById(userid)
        .then(user => {
            if (!user) {
                return res.status(404).json({
                    message: 'No User'
                });
            }
            const monkey = new Monkey({
                _id: mongoose.Types.ObjectId(),
                user: userid,
                name: req.body.name
            });
            return monkey.save();
        })
        .then(result => {
            res.status(201).json({
                message: 'monkey created',
                createdMonkey: {
                    name: result.name,
                    _id: result._id
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};

exports.create_user_monkey = (req, res, next) => {
    const userid = req.params.userID;
    const tokenid = res.locals.user.userId;
    console.log("comparing: ", userid, tokenid)
    if (userid !== tokenid ) { return res.status(404).json({ message: 'Unauthorized'})}
    console.log('Made it to the API for create_user_monkey');
    User.findById(userid)
        .then(user => {
            if (!user) {
                return res.status(404).json({
                    message: 'No User'
                });
            }
            //create the giftee
            const monkey = new Monkey({
                _id: mongoose.Types.ObjectId(),
                user: userid,
                name: req.body.name
            });
            return monkey.save();
        })
        .then(result => {
            res.status(201).json({
                message: 'monkey created',
                createdMonkey: {
                    name: result.name,
                    _id: result._id
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};

exports.get_user_monkeys = (req, res, next) => {
    const userid = req.params.userID;
    const tokenid = res.locals.user.userId;
    console.log("comparing: ", userid, tokenid)
    if (userid !== tokenid ) { return res.status(404).json({ message: 'Unauthorized'})}
    Monkey.find({ user: userid })
        .exec()
        .then(docs => {
            // create whatever we want to return!
            const response = {
                count: docs.length,
                monkeys: docs.map(doc => {
                    return {
                        name: doc.name,
                        _id: doc._id
                    };
                })
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};

exports.get_user_cupcakes = (req, res, next) => {
    const userid = req.params.userID;
    const tokenid = res.locals.user.userId;
    console.log("comparing: ", userid, tokenid)
    if (userid !== tokenid ) { return res.status(404).json({ message: 'Unauthorized'})}
    Cupcake.find({ user: userid })
        .select('color monkey status _id') // don't need user because this is a user lookup
        .exec()
        .then(docs => {
            // create whatever we want to return!
            const response = {
                count: docs.length,
                cupcakes: docs.map(doc => {
                    return {
                        monkey: doc.monkey,
                        color: doc.color,
                        status: doc.status,
                        _id: doc._id
                    };
                })
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};

exports.get_monkey_cupcakes = (req, res, next) => {
    const userid = req.params.userID;
    const tokenid = res.locals.user.userId;
    console.log("comparing: ", userid, tokenid)
    if (userid !== tokenid ) { return res.status(404).json({ message: 'Unauthorized'})}
    Cupcake.find({ monkey: monkeyid })
        .select('color monkey status _id') // don't need user
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                cupcakes: docs.map(doc => {
                    return {
                        monkey: doc.monkey,
                        color: doc.color,
                        status: doc.status,
                        _id: doc._id
                    };
                })
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};


exports.create_user_cupcake = (req, res, next) => {
    console.log(req.body);
    const userid = req.params.userID;
    const tokenid = res.locals.user.userId;
    console.log("comparing: ", userid, tokenid)
    if (userid !== tokenid ) { return res.status(404).json({ message: 'Unauthorized'})}
    const monkeyid = req.params.monkeyID;
    User.findById(userid).then(user => {
        if (!user) {
            return res.status(404).json({
                message: 'No User'
            });
        }
        Monkey.find({ user: user })
            .then(monkey => {
                if (monkey.length < 1) {
                    return res.status(404).json({
                        message: 'No Monkey'
                    });
                }
                //create the monkeys cupcake
                const cupcake = new Cupcake({
                    _id: mongoose.Types.ObjectId(),
                    user: userid,
                    monkey: monkeyid,
                    color: req.body.color,
                    status: 'start'
                });
                return cupcake.save();
            })
            .then(result => {
                res.status(201).json({
                    message: 'cupcake created',
                    createdCupcake: {
                        monkey: monkeyid,
                        color: result.color,
                        status: result.status,
                        _id: result._id
                    }
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: err });
            });
    });
};
