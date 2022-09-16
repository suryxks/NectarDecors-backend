const { User } = require('../models/user.model')
const findUserById = async (id) => {
    const user = await User.findById(id)
    return user;
}

const findUserByEmail = async (email) => {
    const user = await User.findOne({ email: email })
    return user;
}
const createUser = async(userDetails) => {
    const user = await findUserByEmail(userDetails.email);
    if (user) {
      return 409
    }
    const createdUser = await User.create(userDetails);
    return createdUser;
}
module.exports = { findUserById, findUserByEmail,createUser };