"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Core
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
// For developer mode
// import morgan from 'morgan';
// Additional files
// import logger from './utils/winston-loger';
const create_connection_1 = __importDefault(require("./db/create-connection"));
// Routes
const bank_routs_1 = __importDefault(require("./routes/bank.routs"));
// Routes error handler
const invalid_request_handler_1 = __importDefault(require("./middlewares/invalid-request-handler"));
// Server down
const unhandled_rejection_handler_1 = __importDefault(require("./middlewares/unhandled-rejection-handler"));
const uncaught_exception_handler_1 = __importDefault(require("./middlewares/uncaught-exception-handler"));
class App {
    // constructor(appInit: { port: number; currentFile: string; dbUrl: string }) {
    constructor() {
        this.port = process.env.PORT;
        // private readonly file: string;
        this.dbUrl = process.env.MONGODB_URI;
        this.app = express_1.default();
        // this.port = appInit.port;
        // this.file = appInit.currentFile;
        // this.dbUrl = appInit.dbUrl;
        this.initializeDatabase();
        this.initializeReact();
        // this.forDevelopMode();
        this.initializeMiddlewares();
        this.initializeRoutes();
        this.invalidRequestHandler();
        this.errorHandler();
    }
    listen() {
        this.app.listen(this.port, () => {
            try {
                return console.info(`Server use port: ${this.port}`);
            }
            catch (error) {
                // logger.error({
                //     timestamp: '',
                //     level: 'error',
                //     errorIn: 'app.listen',
                //     filePath: this.file,
                //     code: error.code,
                //     message: error.message,
                //     stack: error.stack
                // });
                return process.exit(1);
            }
        });
    }
    getServerInfo() {
        console.info(this.app);
    }
    // private forDevelopMode() {
    //     this.app.use(morgan('dev'));
    // }
    initializeMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use(compression_1.default());
        this.app.use(helmet_1.default());
        this.app.use(cors_1.default());
    }
    // It's need for a production version
    initializeReact() {
        this.app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'build')));
        this.app.get('/', (req, res) => {
            res.sendFile(path_1.default.join(__dirname, '..', 'build', 'index.html'));
        });
        this.app.get('/calculator', (req, res) => {
            res.sendFile(path_1.default.join(__dirname, '..', 'build', 'index.html'));
        });
    }
    initializeRoutes() {
        this.app.use('/api', bank_routs_1.default);
    }
    invalidRequestHandler() {
        this.app.use(invalid_request_handler_1.default);
    }
    errorHandler() {
        this.app.use(unhandled_rejection_handler_1.default);
        this.app.use(uncaught_exception_handler_1.default);
    }
    initializeDatabase() {
        create_connection_1.default(this.dbUrl);
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map