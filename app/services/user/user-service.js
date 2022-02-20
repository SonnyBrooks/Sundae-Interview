import User from './User.model';
import db from '../../../sequelize';

async function getAllUsers() {
    return await User.findAll();
}

async function addUser(firstName, lastName) {
    let newUser = await User.create({
        firstname: firstName,
        lastname: lastName
    })

    return newUser;
}

export default { getAllUsers, addUser };