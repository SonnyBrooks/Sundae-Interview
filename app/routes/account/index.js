import { Router } from 'express';
import accountService from '../../services/account/account-service';

const routes = Router();

routes.get('/', async (req, res) => {
    try{
        let accounts = await accountService.getAllAccounts();
        res.json(accounts);
    } catch (error) {
        res.status(400).json(error);
    }
});

routes.post('/', async(req,res) => {
    try {
        let newAccount = await accountService.addAccount(req.body.firstName, req.body.lastName, req.body.email);
        res.json(newAccount);
    } catch (error) {
        res.status(400).json(error)
    }
});

routes.put('/email/:id', async(req, res) => {
    try {
        let updatedAccount = await accountService.updateEmail(req.params.id, req.body.email);
        res.json(updatedAccount);
    } catch(error) {
        res.status(400).json(error)
    }
})

export default routes;