import Sequelize from 'sequelize';
import db from '../../../sequelize'

const User = db.define(
    "User",
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: {
            type: Sequelize.STRING(256),
            allowNull: false
        },
        lastname: {
            type: Sequelize.STRING(256),
            allowNull: false
        }
    },
    {
        tableName: 'users',
        timestamps: false,
        freezeTableName: true,
    }
);

export default User;