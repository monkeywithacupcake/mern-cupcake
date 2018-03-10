const jwt = require('jsonwebtoken');

const keys = require('../../config/keys');

module.exports = (req, res, next) => {
    // decoded will fail in verify if no token
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, keys.jwtKey);
        req.userData = decoded;
        // if successful, have to call next()
        next();
    } catch (error) {
        return res.status(401).json({
               message: 'Auth failed'
           });
    }
};
