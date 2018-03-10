const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const keys = require('../../config/keys');
const User = require('../models/user');
const Monkey = require('../models/monkey');
const Cupcake = require('../models/cupcake');

// dev only - DELETE or create admin
exports.users_get_all = (req, res, next) => {
    // with no argument, find will return all elements!
    // if no elements, will return EMPTY ARRAY []
    User.find()
        .select("email password _id")
        .exec()
        .then(docs => {
            // create whatever we want to return!
            const response = {
                count: docs.length,
                users: docs.map(doc => {
                    return {
                        email: doc.email,
                        password: doc.password,
                        _id: doc._id
                    }
                })
            }
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
}

exports.monkeys_get_all = (req, res, next) => {
    Monkey.find()
        .select("name user _id")
        .exec()
        .then(docs => {
            // create whatever we want to return!
            const response = {
                count: docs.length,
                monkeys: docs.map(doc => {
                    return {
                        name: doc.name,
                        user: doc.user,
                        _id: doc._id
                    }
                })
            }
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
}

exports.cupcakes_get_all = (req, res, next) => {
    Cupcake.find()
        .select("color status monkey user _id")
        .populate('monkey')
        .exec()
        .then(docs => {
            // create whatever we want to return!
            const response = {
                count: docs.length,
                cupcakes: docs.map(doc => {
                    return {
                        color: doc.color,
                        status: doc.status,
                        monkey: doc.monkey.name,
                        user: doc.user
                        _id: doc._id
                    }
                })
            }
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
}

exports.delete_user = (req, res, next) => {
    const id = req.params.userID;
    User.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'User Deleted'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
}
