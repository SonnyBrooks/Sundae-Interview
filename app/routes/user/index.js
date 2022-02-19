import { Router } from 'express';
import userService from '../../services/user/user-service';

const routes = Router();

routes.get('/', async (req, res) => {
    let users = await userService.getAllUsers();
    res.json(users)
})

export default routes;