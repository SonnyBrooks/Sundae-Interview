import User from './User.model';
import db from '../../../sequelize';

async function getAllUsers() {
    return await User.findAll();
}

async function addUser(firstName, lastName) {
    return 'Derp'
}

export default { getAllUsers };