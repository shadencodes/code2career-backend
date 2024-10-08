const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    console.log(token)
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded)
        const user = await User.findOne({
            _id: decoded.user.id,  // Corrected to decoded.user.id
            tokens: { $elemMatch: { token } }  // Using $elemMatch for the array query
        });
        
        if (!user) {
            console.log("shaden")
            throw new Error();
        }

        req.token = token;
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Please authenticate.' });
    }
};

module.exports = auth;