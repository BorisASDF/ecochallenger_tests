const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt')
const { SECRET } = require('../config/config')

// exports.findByEmail = async (email) => {
//     const user = await User.findOne({email})
//     return user ;
// }

// exports.findUser = async ( userId ) => {
//     const user = await User.findById(userId).lean();
//     return user;
// }

exports.login = async (email,password) => {
    const user = await User.findOne({ email });
    if(!user){
        throw new Error('Invalid email or password')
    }

    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid){
        throw new Error('Invalid email or password')
    }

    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email
    }

    const token = await jwt.sing(payload, SECRET , {expiresIn: '2d'})

    return token;
}

exports.register = async (userData) => {

    const user = await User.findOne({email: userData.email})

    if(user) {
        throw new Error('This user already exists')
    }
    return User.create(userData)
} 
