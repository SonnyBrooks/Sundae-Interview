import { Router } from 'express';
import propertyService from '../../services/property/property-service';

const routes = Router();

routes.get('/', async (req, res) => {
    try {
        let properties = await propertyService.getAllProperties();
        res.json(properties);
    } catch (error) {
        res.status(400).send(error)
    }
})

routes.post('/', async (req, res) => {
    try {
        let props = { ...req.body }
        let newProperty = await propertyService.addProperty(props.propertyName, props.address, props.city, props.state, props.zip);
        res.json(newProperty);
    } catch (error) {
        res.status(400).send(error)
    }
})

export default routes;