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
const middlewares_1 = require("./middlewares");
const router_1 = __importDefault(require("./router"));
const database_1 = __importDefault(require("./database"));
const app = express_1.default();
app.use(cors_1.default());
app.use(middlewares_1.enhanceExpress);
app.use(morgan_1.default('dev'));
app.use(middlewares_1.throttle(1000));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
middlewares_1.initSession(app);
middlewares_1.initPassport(app);
router_1.default(app);
const port = +process.env.PORT || 8000;
database_1.default().then(_ => {
    app.listen(port, () => console.log(`Listening on port: ${port}`));
}).catch(err => console.log('Error connecting to database: ', err));
