import express from 'express';
import routes from './routes';
import db from '../sequelize';

const app = express();

db.authenticate()
    .then(() => console.log('Connected to the database...'))
    .catch(err => console.error('Failed to connect to the database...'))

app.use(express.json());
app.use(routes);
module.exports = app;