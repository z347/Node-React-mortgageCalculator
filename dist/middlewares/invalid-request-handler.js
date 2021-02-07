"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const invalidRequestHandler = (req, res) => res.status(404).json({ message: 'Not valid request' });
exports.default = invalidRequestHandler;
//# sourceMappingURL=invalid-request-handler.js.map