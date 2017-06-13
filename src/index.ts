/**
 * Simple node server for hitting rest end points.
 *
 */
import * as express from 'express';
import { IndexController } from './controllers/IndexController';

let app = express();
let port = 5000;

this._indexController = new IndexController();

app.route('/index')
    .get(this._indexController.find)
    .post(this._indexController.create);

app.listen(port, () => {
    console.log('Your node template is running at localhost:' + port + ' best of luck and all that');
});
