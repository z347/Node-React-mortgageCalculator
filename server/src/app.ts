// Core
import express, { Application } from 'express';
import path from 'path';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';

// For developer mode
// import morgan from 'morgan';

// Additional files
// import logger from './utils/winston-loger';
import connect from './db/create-connection';

// Routes
import userRouters from './routes/bank.routs';

// Routes error handler
import invalidRequestHandler from './middlewares/invalid-request-handler';

// Server down
import unhandledRejectionHandler from './middlewares/unhandled-rejection-handler';
import uncaughtExceptionHandler from './middlewares/uncaught-exception-handler';

class App {
    private readonly app: Application;
    private readonly port = process.env.PORT;
    // private readonly file: string;
    private readonly dbUrl = process.env.MONGODB_URI;

    // constructor(appInit: { port: number; currentFile: string; dbUrl: string }) {
    constructor() {
        this.app = express();
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

    public listen(): void {
        this.app.listen(this.port, (): void => {
            try {
                return console.info(`Server use port: ${this.port}`);
            } catch (error) {
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

    public getServerInfo(): void {
        console.info(this.app);
    }

    // private forDevelopMode() {
    //     this.app.use(morgan('dev'));
    // }

    private initializeMiddlewares() {
        this.app.use(express.json());
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }

    // It's need for a production version
    private initializeReact() {
        this.app.use(express.static(path.join(__dirname, '..', 'build')));

        this.app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
        });

        this.app.get('/calculator', (req, res) => {
            res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
        });
    }

    private initializeRoutes() {
        this.app.use('/api', userRouters);
    }

    private invalidRequestHandler() {
        this.app.use(invalidRequestHandler);
    }

    private errorHandler() {
        this.app.use(unhandledRejectionHandler);
        this.app.use(uncaughtExceptionHandler);
    }

    private initializeDatabase() {
        connect(this.dbUrl);
    }
}

export default App;
