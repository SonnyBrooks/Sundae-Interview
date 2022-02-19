export default(sequelize, DataTypes) => {
    return sequelize.define(
        "Property",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            propertyName: {
                type: DataTypes.STRING(256),
                allowNull: false
            },
            address: {
                type: DataTypes.STRING(256),
                allowNull: false
            },
            city: {
                type: DataTypes.STRING(256),
                allowNull: false
            },
            stateCode: {
                type: DataTypes.STRING(2),
                allowNull: false
            },
            zipCode: {
                type: DataTypes.STRING(10),
                allowNull: false
            }
        },
        {
            tableName: 'property',
            timestamps: false,
            freezeTableName: true,
        }
    )
    
}