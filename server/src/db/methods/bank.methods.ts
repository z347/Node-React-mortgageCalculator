import { BankModel, BankInterface } from '../../models/bank.model';

const getOneBankByName = async (name: string): Promise<BankInterface | null> => {
    try {
        return await BankModel.findOne({ name });
    } catch (e) {
        return e.message;
    }
};

const getOneBankById = async (_id: string): Promise<BankInterface | null> => {
    try {
        return await BankModel.findById({ _id });
    } catch (e) {
        return e.message;
    }
};

const getAllBank = async (): Promise<BankInterface[] | null> => {
    try {
        return await BankModel.find({}, { __v: false });
    } catch (e) {
        return e.message;
    }
};

const createNewBank = async (
    name: string,
    interestRate: number,
    maximumLoan: number,
    minimumDownPayment: number,
    loanTerm: number
): Promise<BankInterface | null> => {
    try {
        const newProduct = new BankModel({ name, interestRate, maximumLoan, minimumDownPayment, loanTerm });
        return await newProduct.save();
    } catch (e) {
        return e.message;
    }
};

const deleteOneBank = async (_id: string): Promise<BankInterface | null> => {
    try {
        return await BankModel.findByIdAndDelete(_id);
    } catch (e) {
        return e.message;
    }
};

const updateOneBank = async (
    _id: string,
    newName: string,
    newInterestRate: number,
    newMaximumLoan: number,
    newMinimumDownPayment: number,
    newLoanTerm: number
): Promise<BankInterface | null> => {
    try {
        return await BankModel.findByIdAndUpdate(
            {
                _id
            },
            {
                $set: {
                    name: newName,
                    interestRate: newInterestRate,
                    maximumLoan: newMaximumLoan,
                    minimumDownPayment: newMinimumDownPayment,
                    loanTerm: newLoanTerm
                }
            }
        );
    } catch (e) {
        return e.message;
    }
};

export { getAllBank, getOneBankByName, getOneBankById, createNewBank, deleteOneBank, updateOneBank };
