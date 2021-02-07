import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import { getAllBank, createNewBank, deleteOneBank, updateOneBank } from '../db/methods/bank.methods';
import errorsValidationResult from '../utils/result-express-validator';
import { BankInterface } from '../models/bank.model';

interface InputsInterface {
    name: BankInterface['name'];
    interestRate: BankInterface['interestRate'];
    maximumLoan: BankInterface['maximumLoan'];
    minimumDownPayment: BankInterface['minimumDownPayment'];
    loanTerm: BankInterface['loanTerm'];
}

interface UpdateInputsInterface {
    id: string;
    name: BankInterface['name'];
    interestRate: BankInterface['interestRate'];
    maximumLoan: BankInterface['maximumLoan'];
    minimumDownPayment: BankInterface['minimumDownPayment'];
    loanTerm: BankInterface['loanTerm'];
}

const getAllBanksController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const allBanks = await getAllBank();
        return res.status(200).json(allBanks);
    } catch (e) {
        return res.status(500).json({ errors: e.message });
    }
};

const createNewBankController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const errorsResult = validationResult(req);

        if (!errorsResult.isEmpty()) {
            return errorsValidationResult(req, res, 400);
        }

        const { name, interestRate, maximumLoan, minimumDownPayment, loanTerm }: InputsInterface = req.body;
        await createNewBank(name, interestRate, maximumLoan, minimumDownPayment, loanTerm);

        return res.status(201).json({ message: 'Bank was created.' });
    } catch (e) {
        return res.status(500).json({ errors: e.message });
    }
};

const editOneBankController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const errorsResult = validationResult(req);

        if (!errorsResult.isEmpty()) {
            return errorsValidationResult(req, res, 400);
        }

        const { id, name, interestRate, maximumLoan, minimumDownPayment, loanTerm }: UpdateInputsInterface = req.body;

        await updateOneBank(id, name, interestRate, maximumLoan, minimumDownPayment, loanTerm);

        return res.status(202).json({ message: 'Your request has been approved.' });
    } catch (e) {
        return res.status(500).json({ errors: e.message });
    }
};

const deleteOneBankController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const correctId = id.slice(1);
        const result = await deleteOneBank(correctId);

        if (result === null) {
            return res.status(406).json({ message: 'Incorrect bank ID' });
        }

        return res.status(200).json({ message: 'Bank was deleted from database' });
    } catch (e) {
        return res.status(500).json({ errors: e.message });
    }
};

export { getAllBanksController, createNewBankController, editOneBankController, deleteOneBankController };
