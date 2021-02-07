import { Schema, model, Document } from 'mongoose';

/* eslint-disable prettier/prettier */

interface BankInterface extends Document {
    name: string;
    interestRate: number;
    maximumLoan: number;
    minimumDownPayment: number;
    loanTerm: number;
}

const BankSchema: Schema = new Schema({
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

const BankModel = model<BankInterface>('Bank', BankSchema);

export { BankInterface, BankModel };
