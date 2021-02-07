"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uncaughtException = () => {
    process.on('unhandledRejection', (error) => {
        console.error(`${error}, Uncaught Exception thrown`);
        process.exit(1);
    });
};
exports.default = uncaughtException;
//# sourceMappingURL=uncaught-exception-handler.js.map