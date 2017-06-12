/**
 * Simple node server for hitting rest end points.
 *
 */
import * as express from 'express';

let app = express();
let port = 5000;

app.listen(port, () => {
    console.log('Your node template is running at localhost:' + port + ' best of luck and all that');
});
