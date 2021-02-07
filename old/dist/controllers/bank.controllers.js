"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneBankController = exports.editOneBankController = exports.createNewBankController = exports.getAllBanksController = void 0;
const express_validator_1 = require("express-validator");
const bank_methods_1 = require("../db/methods/bank.methods");
const result_express_validator_1 = __importDefault(require("../utils/result-express-validator"));
const getAllBanksController = async (req, res) => {
    try {
        const allBanks = await bank_methods_1.getAllBank();
        return res.status(200).json(allBanks);
    }
    catch (e) {
        return res.status(500).json({ errors: e.message });
    }
};
exports.getAllBanksController = getAllBanksController;
const createNewBankController = async (req, res) => {
    try {
        const errorsResult = express_validator_1.validationResult(req);
        if (!errorsResult.isEmpty()) {
            return result_express_validator_1.default(req, res, 400);
        }
        const { name, interestRate, maximumLoan, minimumDownPayment, loanTerm } = req.body;
        await bank_methods_1.createNewBank(name, interestRate, maximumLoan, minimumDownPayment, loanTerm);
        return res.status(201).json({ message: 'Bank was created.' });
    }
    catch (e) {
        return res.status(500).json({ errors: e.message });
    }
};
exports.createNewBankController = createNewBankController;
const editOneBankController = async (req, res) => {
    try {
        const errorsResult = express_validator_1.validationResult(req);
        if (!errorsResult.isEmpty()) {
            return result_express_validator_1.default(req, res, 400);
        }
        const { id, name, interestRate, maximumLoan, minimumDownPayment, loanTerm } = req.body;
        await bank_methods_1.updateOneBank(id, name, interestRate, maximumLoan, minimumDownPayment, loanTerm);
        return res.status(202).json({ message: 'Your request has been approved.' });
    }
    catch (e) {
        return res.status(500).json({ errors: e.message });
    }
};
exports.editOneBankController = editOneBankController;
const deleteOneBankController = async (req, res) => {
    try {
        const { id } = req.params;
        const correctId = id.slice(1);
        const result = await bank_methods_1.deleteOneBank(correctId);
        if (result === null) {
            return res.status(406).json({ message: 'Incorrect bank ID' });
        }
        return res.status(200).json({ message: 'Bank was deleted from database' });
    }
    catch (e) {
        return res.status(500).json({ errors: e.message });
    }
};
exports.deleteOneBankController = deleteOneBankController;
//# sourceMappingURL=bank.controllers.js.map