"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankModel = void 0;
const mongoose_1 = require("mongoose");
const BankSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    interestRate: {
        type: Number,
        min: 0,
        required: true
    },
    maximumLoan: {
        type: Number,
        required: true
    },
    minimumDownPayment: {
        type: Number,
        min: 0,
        required: true
    },
    loanTerm: {
        type: Number,
        min: 0,
        required: true
    }
});
const BankModel = mongoose_1.model('Bank', BankSchema);
exports.BankModel = BankModel;
//# sourceMappingURL=bank.model.js.map