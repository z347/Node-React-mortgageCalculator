"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const errors = (req, res, statusCode) => {
    // Array with all errors
    const errorFormatter = ({ msg, param }) => `${param} : ${msg}`;
    const result = express_validator_1.validationResult(req).formatWith(errorFormatter);
    return res.status(statusCode).json({ errors: result.array() });
};
exports.default = errors;
//# sourceMappingURL=result-express-validator.js.map