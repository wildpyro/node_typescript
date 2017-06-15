/**
 * Simple node server for hitting rest end points.
 */
import * as bodyParser from 'body-parser';
import * as chalk from 'chalk';
import * as express from 'express';
import * as glob from 'glob';
import * as mongoose from 'mongoose';
import * as path from 'path';
//import { IndexController } from './controllers/IndexController';

/**
 * Initialize an express instance with all the fixings
 */
class App {

    public express: express.Application;

    constructor() {
        this.express = express();
        this.setBodyParser();
        this.setMongoConnection();
        this.resolveRoutes();
    }

    private setBodyParser(): void {
        // Request body parsing middleware should be above methodOverride
        this.express.use(bodyParser.urlencoded({
            extended: true
        }));

        this.express.use(bodyParser.json());
    }

    private setMongoConnection(): void {
        let uri = 'mongodb://localhost/index-test';

        mongoose.connect(uri, (error, result) => {
            if (error) {
                console.log('could not connect! ' + error);
            }
        });
    }

	/**
	 * initialize all the routes and verify they exist
	 */
    private resolveRoutes(): void {

        let globOptions = <glob.IOptions>{ debug: false };

        //try and fix this to remove tsDist
        let routes = glob('./tsDist/routes/*.js', globOptions, (error, results) => {
            if (error) {
                console.log(chalk.red('error globbing files:' + error));
            }

            results.forEach(routePath => {
                require(path.resolve(routePath))();
            });

            console.log(chalk.white('resolved routes:' + results));
        });
    }
}

let app = new App().express;
let port = 5000;

//this._indexController = new IndexController();

/*app.route('/index')
    .get(this._indexController.find)
    .post(this._indexController.create);
*/

app.listen(port, () => {
    console.log(chalk.white('Your node template is running at localhost:' + port + ' best of luck and all that'));
});
