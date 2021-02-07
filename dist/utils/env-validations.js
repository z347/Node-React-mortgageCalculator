"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const envalid_1 = __importDefault(require("envalid"));
const { cleanEnv, port, str } = envalid_1.default;
const envValidation = () => {
    cleanEnv(process.env, {
        SERVER_PORT: port(),
        MONGODB_URI: str()
    });
};
exports.default = envValidation;
//# sourceMappingURL=env-validations.js.map