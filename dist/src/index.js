"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const init_dotenv_1 = __importDefault(require("./init-dotenv"));
init_dotenv_1.default();
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const heroku_ssl_redirect_1 = __importDefault(require("heroku-ssl-redirect"));
const express_useragent_1 = require("express-useragent");
const middlewares_1 = require("./middlewares");
const router_1 = __importDefault(require("./router"));
const database_1 = __importDefault(require("./database"));
const config_1 = __importDefault(require("./config"));
const app = express_1.default();
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(config_1.default.staticRoot));
}
app.use(express_useragent_1.express());
app.use(middlewares_1.useragentLogger);
app.use(heroku_ssl_redirect_1.default());
app.use(cors_1.default());
app.use(middlewares_1.enhanceExpress);
app.use(morgan_1.default('dev'));
app.use(middlewares_1.throttle(1000));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
middlewares_1.initSession(app);
middlewares_1.initPassport(app);
// NOTE: Make sure this middleware is initiated after session and passport
app.use(middlewares_1.createUserAuthDetailMiddleware);
router_1.default(app);
app.use(middlewares_1.errorHandler);
const port = +process.env.PORT || 8000;
database_1.default().then(_ => {
    const { NODE_ENV, MONGO_URL, SESSION_SECRET } = process.env;
    console.log('process.env: ', { NODE_ENV, MONGO_URL, SESSION_SECRET });
    app.listen(port, () => console.log(`Listening on port: ${port}`));
}).catch(err => console.log('Error connecting to database: ', err));
