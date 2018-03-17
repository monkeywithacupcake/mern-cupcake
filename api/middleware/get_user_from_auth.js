const jwt = require('jsonwebtoken');

const keys = require('../../config/keys');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, keys.jwtKey);
        req.userData = decoded;
        console.log("check_auth just decoded: ", req.userData)
        // if successful, have to call next()
        res.locals.user = req.userData;
        next();
    } catch (error) {
        return res.status(401).json({
               message: 'Auth failed'
           });
    }
};
