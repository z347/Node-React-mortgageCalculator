// import { join } from 'path';

// import envConfig from './config';
import App from './app';
// import validateEnv from './utils/env-validations';

// const { SERVER_PORT, MONGODB_URI } = envConfig;

// const port = Number(SERVER_PORT);
// const dbUrl = String(MONGODB_URI);
// const currentFile = join(__dirname);

// validateEnv();

// const app = new App({
//     port,
//     currentFile,
//     dbUrl
// });

const app = new App();

app.listen();
