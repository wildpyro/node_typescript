import * as express from 'express';
import { IndexInterface } from '../interfaces/IndexInterface';
import { schema as IndexSchema } from '../schemas/IndexSchema.mongoose';

export class IndexController {

    create(req: express.Request, res: express.Response): void {
        try {

            let Index: IndexInterface = <IndexInterface>req.body;

            IndexSchema.create(Index, (error, result) => {
                if (error) {
                    res.send({ 'error': 'error' });
                }
                else {
                    res.send({ 'success': 'success' });
                }
            });
        } catch (e) {
            console.log(e);
            res.send({ 'error': 'error in your request' });

        }
    }

    update(req: express.Request, res: express.Response): void {
        try {
            let Index: IndexInterface = <IndexInterface>req.body;
            let _id: string = req.params._id;
            IndexSchema.update(_id, Index, (error, result) => {
                if (error) {
                    res.send({ 'error': 'error' });
                }
                else {
                    res.send({ 'success': 'success' });
                }
            });
        } catch (e) {
            console.log(e);
            res.send({ 'error': 'error in your request' });
        }
    }

    delete(req: express.Request, res: express.Response): void {
        try {

            let _id: string = req.params._id;
            IndexSchema.remove(_id, (error) => {
                if (error) {
                    res.send({ 'error': 'error' });
                }
                else {
                    res.send({ 'success': 'success' });
                }
            });
        } catch (e) {
            console.log(e);
            res.send({ 'error': 'error in your request' });

        }
    }

    findById(req: express.Request, res: express.Response): void {
        try {

            let _id: string = req.params._id;
            IndexSchema.findById(_id, (error, result) => {
                if (error) {
                    res.send({ 'error': 'error' });
                }
                else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log(e);
            res.send({ 'error': 'error in your request' });

        }
    }
}
