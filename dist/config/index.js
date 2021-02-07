"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
dotenv_1.default.config({ path: `src/config/${envFile}` });
const { SERVER_PORT } = process.env;
const { MONGODB_URI } = process.env;
exports.default = Object.freeze({ SERVER_PORT, MONGODB_URI });
//# sourceMappingURL=index.js.map