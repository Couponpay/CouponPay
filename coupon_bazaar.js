import express from "express";
import HoganExpress from "hogan-express";
import bodyParser from "body-parser";
import morgan from 'morgan'
import config from './config/config'
import CookieParser from "cookie-parser"
import router from "./routes/router";
import chalk from "chalk";
import connectToDb from "./config/connect";
import CommonController from "./controllers/CommonController";
connectToDb();

// CommonController.Calculate_Delivery_Price_From_WareHouse(25, { Postal_Code: "533005" }).then((Data) => {
//     
// })

/********************
 * 
 * 
 * Api Configuration
 * 
 * 
 */
const api_app = express();
const api_port = config.api_port;
api_app.use(express.static('api_dist')); //api dist
api_app.engine('html', HoganExpress);
// By default, Express will use a generic HTML wrapper (a layout) to render all your pages. If you don't need that, turn it off.
api_app.set('view options', {
    layout: true
});
api_app.set('layout', 'container');
api_app.set('views', __dirname + '/api_dist');
api_app.set('view engine', 'html');
api_app.use(bodyParser.text({ limit: config.BodyParserLimit }))
api_app.use(bodyParser.raw({ limit: config.BodyParserLimit }));
api_app.use(bodyParser.json({ limit: config.BodyParserLimit }));
api_app.use(bodyParser.urlencoded({ extended: true, limit: config.BodyParserLimit }));
api_app.use(morgan(function (tokens, req, res) {
    let method = tokens.method(req, res);
    let url = tokens.url(req, res);
    let resptime = `${tokens['response-time'](req, res)} ms`;
    return `${chalk.bold.greenBright(method)} ${chalk.yellowBright(url)}  ${chalk.yellowBright(resptime)}`;
}))
api_app.use(CookieParser());
api_app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});
api_app.use('/', router);
// catch 404 and forward to error handler
api_app.use(function (req, res, next) {
    return res.render('index');
});
api_app.listen(api_port, () => {
    console.log(`Dogemo Api Server started in my pant ${api_port}`);
});

/********************
 * 
 * 
 * Admin Configuration
 * 
 * 
 */
const admin_app = express();
const admin_port = config.admin_port;
admin_app.use(express.static('admin_dist')); //admin dist
admin_app.engine('html', HoganExpress);
// By default, Express will use a generic HTML wrapper (a layout) to render all your pages. If you don't need that, turn it off.
admin_app.set('view options', {
    layout: true
});
admin_app.set('layout', 'container');
admin_app.set('views', __dirname + '/admin_dist');
admin_app.set('view engine', 'html');
admin_app.use(bodyParser.text({ limit: config.BodyParserLimit }))
admin_app.use(bodyParser.raw({ limit: config.BodyParserLimit }));
admin_app.use(bodyParser.json({ limit: config.BodyParserLimit }));
admin_app.use(bodyParser.urlencoded({ extended: true, limit: config.BodyParserLimit }));
admin_app.use(morgan(function (tokens, req, res) {
    let method = tokens.method(req, res);
    let url = tokens.url(req, res);
    let resptime = `${tokens['response-time'](req, res)} ms`;
    return `${chalk.bold.greenBright(method)} ${chalk.yellowBright(url)}  ${chalk.yellowBright(resptime)}`;
}))
admin_app.use(CookieParser());
admin_app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});
// catch 404 and forward to error handler
admin_app.use(function (req, res, next) {
    return res.render('index');
});
admin_app.listen(admin_port, () => {
    console.log(`Dogemo Admin Server started on ${admin_port}`);
});


/********************
 * 
 * 
 * Website Configuration
 * 
 * 
 */
const web_app = express();
const web_port = config.web_port;
web_app.use(express.static('web_dist')); //web dist
web_app.engine('html', HoganExpress);
// By default, Express will use a generic HTML wrapper (a layout) to render all your pages. If you don't need that, turn it off.
web_app.set('view options', {
    layout: true
});
web_app.set('layout', 'container');
web_app.set('views', __dirname + '/web_dist');
web_app.set('view engine', 'html');
web_app.use(bodyParser.text({ limit: config.BodyParserLimit }))
web_app.use(bodyParser.raw({ limit: config.BodyParserLimit }));
web_app.use(bodyParser.json({ limit: config.BodyParserLimit }));
web_app.use(bodyParser.urlencoded({ extended: true, limit: config.BodyParserLimit }));
web_app.use(morgan(function (tokens, req, res) {
    let method = tokens.method(req, res);
    let url = tokens.url(req, res);
    let resptime = `${tokens['response-time'](req, res)} ms`;
    return `${chalk.bold.greenBright(method)} ${chalk.yellowBright(url)}  ${chalk.yellowBright(resptime)}`;
}))
web_app.use(CookieParser());
web_app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});
// catch 404 and forward to error handler
web_app.use(function (req, res, next) {
    return res.render('index');
});
web_app.listen(web_port, () => {
    console.log(`Dogemo Website Server started ${web_port}`);
});