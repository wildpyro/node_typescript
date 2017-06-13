import * as express from 'express';
import { IndexController } from '../controllers/IndexController';

var router = express.Router();
class IndexRoutes {
    private _indexController: IndexController;

    constructor() {
        this._indexController = new IndexController();
    }
    get routes() {
        var controller = this._indexController;
        router.get('/index', controller.find);
        router.post('/index', controller.create);
        router.put('/index/:_id', controller.update);
        router.get('/index/:_id', controller.findById);
        router.delete('/index/:_id', controller.delete);

        return router;
    }
}

Object.seal(IndexRoutes);
export = IndexRoutes;
