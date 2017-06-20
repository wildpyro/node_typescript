import * as express from 'express';
import { IndexController as Controller } from '../controllers/IndexController';

class IndexRoutes {
    _indexController: Controller;

    constructor() {
        this._indexController = new Controller();
    }

    public create(router: express.Router) {
        var controller = this._indexController;
        router.delete('/index/:_id', controller.delete);
        router.get('/index', controller.find);
        router.get('/index/:_id', controller.findById);
        router.post('/index', controller.create);
        router.put('/index/:_id', controller.update);
    }
}

Object.seal(IndexRoutes);
export let route = new IndexRoutes();
