"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fieldIdValidation = exports.allFieldsValidation = void 0;
const express_validator_1 = require("express-validator");
const bank_methods_1 = require("../db/methods/bank.methods");
/* eslint-disable prettier/prettier */
const allFieldsValidation = [
    express_validator_1.check('name')
        .notEmpty()
        .withMessage('This field must be filled.')
        .isString()
        .withMessage('Invalid data type.')
        .custom(async (name) => {
        try {
            const notAvailableName = await bank_methods_1.getOneBankByName(name);
            if (notAvailableName !== null) {
                return Promise.reject(new Error('Bank with this name is already exists.'));
            }
            return false;
        }
        catch (e) {
            return e.message;
        }
    }),
    express_validator_1.check('interestRate')
        .notEmpty()
        .withMessage('This field must be filled.')
        .isNumeric()
        .withMessage('Invalid data type.'),
    express_validator_1.check('maximumLoan')
        .notEmpty()
        .withMessage('This field must be filled.')
        .isNumeric()
        .withMessage('Invalid data type.'),
    express_validator_1.check('minimumDownPayment')
        .notEmpty()
        .withMessage('This field must be filled.')
        .isNumeric()
        .withMessage('Invalid data type.'),
    express_validator_1.check('loanTerm')
        .notEmpty()
        .withMessage('This field must be filled.')
        .isNumeric()
        .withMessage('Invalid data type.')
        .exists()
];
exports.allFieldsValidation = allFieldsValidation;
const fieldIdValidation = [
    express_validator_1.check('id')
        .notEmpty()
        .withMessage('This field must be filled.')
        .isString()
        .withMessage('Invalid data type.')
        .custom(async (id) => {
        try {
            const availableId = await bank_methods_1.getOneBankById(id);
            // TODO: Fix it => conditions does not work
            if (availableId === null) {
                return Promise.reject(new Error('Bank with this id was not found.'));
            }
            return false;
        }
        catch (e) {
            return e.message;
        }
    })
        .exists()
];
exports.fieldIdValidation = fieldIdValidation;
//# sourceMappingURL=bank-validations.js.map