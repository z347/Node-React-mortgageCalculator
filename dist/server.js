"use strict";
// import { join } from 'path';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import envConfig from './config';
const app_1 = __importDefault(require("./app"));
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
const app = new app_1.default();
app.listen();
//# sourceMappingURL=server.js.map