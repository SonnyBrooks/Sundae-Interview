import Sequelize from 'sequelize';

const db = new Sequelize('postgres', 'postgres', 'sundae', {
    host: 'localhost',
    dialect: 'postgres'
});

export default db;