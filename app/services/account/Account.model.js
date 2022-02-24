import Sequelize from 'sequelize';
import db from '../../../sequelize'

const Account = db.define(
    "Account",
    {
        account_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: Sequelize.STRING(256),
            allowNull: false
        },
        last_name: {
            type: Sequelize.STRING(256),
            allowNull: false
        },
        email: {
            type: Sequelize.STRING(256),
            allowNull: true
        }
    },
    {
        tableName: 'account',
        timestamps: false,
        freezeTableName: true,
    }
);

export default Account;