import { Router } from 'express';
import health from './health';
import user from './user';

const routes = Router();

routes.use('/health', health);
routes.use('/user', user);

export default routes