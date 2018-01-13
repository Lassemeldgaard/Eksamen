import * as express from 'express';
import { number } from './numbers';
let app = express();
app.set('port', (process.env.PORT || 5000));
app.get("/", function (req, res) {
    console.log("Request!");
    let thenumber = 2
    res.send(number(thenumber));
    });
    app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
    });