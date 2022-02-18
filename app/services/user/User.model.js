export default(sequelize, DataTypes) => {
    return sequelize.define(
        "User",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            firstName: {
                type: DataTypes.STRING(256),
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING(256),
                allowNull: false
            }
        },
        {
            tableName: 'user',
            timestamps: false,
            freezeTableName: true,
        }
    )
    
}