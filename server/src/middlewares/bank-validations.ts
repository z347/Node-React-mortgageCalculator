import { check, ValidationChain } from 'express-validator';

import { getOneBankByName, getOneBankById } from '../db/methods/bank.methods';

/* eslint-disable prettier/prettier */

const allFieldsValidation: ValidationChain[] = [
    check('name')
        .notEmpty()
        .withMessage('This field must be filled.')
        .isString()
        .withMessage('Invalid data type.')
        .custom(async (name: string) => {
            try {
                const notAvailableName = await getOneBankByName(name);

                if (notAvailableName !== null) {
                    return Promise.reject(new Error('Bank with this name is already exists.'));
                }

                return false;
            } catch (e) {
                return e.message;
            }
        }),

    check('interestRate')
        .notEmpty()
        .withMessage('This field must be filled.')
        .isNumeric()
        .withMessage('Invalid data type.'),

    check('maximumLoan')
        .notEmpty()
        .withMessage('This field must be filled.')
        .isNumeric()
        .withMessage('Invalid data type.'),

    check('minimumDownPayment')
        .notEmpty()
        .withMessage('This field must be filled.')
        .isNumeric()
        .withMessage('Invalid data type.'),

    check('loanTerm')
        .notEmpty()
        .withMessage('This field must be filled.')
        .isNumeric()
        .withMessage('Invalid data type.')
        .exists()
];

const fieldIdValidation: ValidationChain[] = [
    check('id')
        .notEmpty()
        .withMessage('This field must be filled.')
        .isString()
        .withMessage('Invalid data type.')
        .custom(async (id: string) => {
            try {
                const availableId = await getOneBankById(id);

                // TODO: Fix it => conditions does not work
                if (availableId === null) {
                    return Promise.reject(new Error('Bank with this id was not found.'));
                }

                return false;
            } catch (e) {
                return e.message;
            }
        })
        .exists()
];

export { allFieldsValidation, fieldIdValidation };
