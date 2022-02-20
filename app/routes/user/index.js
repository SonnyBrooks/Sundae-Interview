import { Router } from 'express';
import userService from '../../services/user/user-service';

const routes = Router();

routes.get('/', async (req, res) => {
    let users = await userService.getAllUsers();
    res.json(users);
})

routes.post('/', async(req,res) => {
    let newUser = await userService.addUser(req.body.firstName, req.body.lastName);
    res.json(newUser);
})

export default routes;