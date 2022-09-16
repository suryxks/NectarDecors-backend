const jwt = require('jsonwebtoken');
require('dotenv').config();


const generateAuthToken = (userId) => {
    const token = jwt.sign({ userId }, process.env.SECRET, { expiresIn: '7d' });
    return token;
}

const verifyToken = (token) => {
    try {
        jwt.verify(token, process.env.SECRET);
    } catch (e) {
        return false;
    }
}

module.exports={generateAuthToken,verifyToken}