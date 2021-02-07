"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
const { createLogger, transports, format } = winston_1.default;
const { combine, timestamp, prettyPrint } = format;
const myFormat = () => combine(timestamp({ format: 'HH:mm:ss DD-MM-YYYY' }), prettyPrint());
const logger = createLogger({
    transports: [
        new transports.Console({
            format: myFormat()
        }),
        new winston_daily_rotate_file_1.default({
            level: 'error',
            datePattern: 'DD-MM-YYYY',
            dirname: './src/logs',
            filename: 'errors %DATE%.log',
            maxSize: '10m',
            zippedArchive: true,
            format: myFormat()
        })
    ]
});
exports.default = logger;
//# sourceMappingURL=winston-loger.js.map