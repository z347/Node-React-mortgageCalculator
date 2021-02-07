"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// eslint-disable-next-line
const connect = (URL) => {
    const createConnect = () => {
        mongoose_1.default
            .connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
            .then(() => console.info('MongoDB is connected'))
            .catch((error) => {
            console.error(`Connection to MongoDB is rejected: ${error.message}`);
            return process.exit(1);
        });
    };
    createConnect();
    mongoose_1.default.connection.on('disconnected', createConnect);
};
exports.default = connect;
//# sourceMappingURL=create-connection.js.map