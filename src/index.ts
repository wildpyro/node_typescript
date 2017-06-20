/**
 * Simple node server for hitting rest end points.
 */
import * as bodyParser from 'body-parser';
import * as chalk from 'chalk';
import * as express from 'express';
import * as glob from 'glob';
import * as mongoose from 'mongoose';
import * as path from 'path';
import * as async from 'async';
import * as indexRoute from './routes/IndexRoute';

/**
 * Initialize an express instance with all the fixings
 */
class App {

    public express: express.Application;
    public port: number;

    constructor(port: number) {
        this.port = port;
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

    /**
     * Set the connection to the database
     */
    private setMongoConnection(): void {
        let uri = 'mongodb://localhost/index-test';

        mongoose.connect(uri, (error, result) => {
            if (error) {
                console.log(chalk.red('could not connect! ' + error));
            }
        });
    }

	/**
	 * initialize all the routes and verify they exist
	 */
    private resolveRoutes(): void {

        let router: express.Router;
        router = express.Router();

        //Add each one of these?
        indexRoute.route.create(router);

        this.express.use(router);
    }

}

async.waterfall([
    //Should be some kind of async callback - function (error: Error, app: App, callback: async.AsyncResultCallback) {
    function (callback: any) {
        let app = new App(5000);
        callback(null, app);
    },
    function (app: App, callback: any) {
        app.express.listen(app.port, () => {
            console.log(chalk.white('Your node template is running at localhost:' + app.port + ' best of luck and all that'));
        });

        callback(null, app);
    }
],
    function (error: Error, app: App) {
        if (error) {
            console.log(chalk.red('error loading your app'));
        }
    }
);
