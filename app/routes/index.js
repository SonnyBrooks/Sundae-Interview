import { Router } from 'express';
import health from './health';
import account from './account';
import property from './property';

const routes = Router();

routes.use('/health', health);
routes.use('/account', account);
routes.use('/property', property);
routes.use('*', (req, res) => {
    res.json({msg: 'Ope. You\'re probably lost.'})
})

export default routes