import { Router } from 'express';

const os = require('os');
const router = Router();

export default router.get('/', (req,res) => {
    return res.send('It\'s up!');
})