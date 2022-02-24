import Sequelize from 'sequelize';
import db from '../../../sequelize'

const Property = db.define(
    "Property",
    {
        property_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        property_name: {
            type: Sequelize.STRING(256),
            allowNull: false
        },
        address: {
            type: Sequelize.STRING(256),
            allowNull: false
        },
        city: {
            type: Sequelize.STRING(256),
            allowNull: false
        },
        state_code: {
            type: Sequelize.STRING(2),
            allowNull: false
        },
        zip_code: {
            type: Sequelize.STRING(10),
            allowNull: false
        }
    },
    {
        tableName: 'property',
        timestamps: false,
        freezeTableName: true,
    }
);

export default Property;
