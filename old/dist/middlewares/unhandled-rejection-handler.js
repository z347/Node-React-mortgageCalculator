"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unhandledRejection = () => {
    process.on('unhandledRejection', (reason, promise) => {
        console.error(`${reason}, Unhandled Rejection at Promise, ${promise}`);
        process.exit(1);
    });
};
exports.default = unhandledRejection;
//# sourceMappingURL=unhandled-rejection-handler.js.map