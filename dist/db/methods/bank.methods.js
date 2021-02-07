"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOneBank = exports.deleteOneBank = exports.createNewBank = exports.getOneBankById = exports.getOneBankByName = exports.getAllBank = void 0;
const bank_model_1 = require("../../models/bank.model");
const getOneBankByName = async (name) => {
    try {
        return await bank_model_1.BankModel.findOne({ name });
    }
    catch (e) {
        return e.message;
    }
};
exports.getOneBankByName = getOneBankByName;
const getOneBankById = async (_id) => {
    try {
        return await bank_model_1.BankModel.findById({ _id });
    }
    catch (e) {
        return e.message;
    }
};
exports.getOneBankById = getOneBankById;
const getAllBank = async () => {
    try {
        return await bank_model_1.BankModel.find({}, { __v: false });
    }
    catch (e) {
        return e.message;
    }
};
exports.getAllBank = getAllBank;
const createNewBank = async (name, interestRate, maximumLoan, minimumDownPayment, loanTerm) => {
    try {
        const newProduct = new bank_model_1.BankModel({ name, interestRate, maximumLoan, minimumDownPayment, loanTerm });
        return await newProduct.save();
    }
    catch (e) {
        return e.message;
    }
};
exports.createNewBank = createNewBank;
const deleteOneBank = async (_id) => {
    try {
        return await bank_model_1.BankModel.findByIdAndDelete(_id);
    }
    catch (e) {
        return e.message;
    }
};
exports.deleteOneBank = deleteOneBank;
const updateOneBank = async (_id, newName, newInterestRate, newMaximumLoan, newMinimumDownPayment, newLoanTerm) => {
    try {
        return await bank_model_1.BankModel.findByIdAndUpdate({
            _id
        }, {
            $set: {
                name: newName,
                interestRate: newInterestRate,
                maximumLoan: newMaximumLoan,
                minimumDownPayment: newMinimumDownPayment,
                loanTerm: newLoanTerm
            }
        });
    }
    catch (e) {
        return e.message;
    }
};
exports.updateOneBank = updateOneBank;
//# sourceMappingURL=bank.methods.js.map