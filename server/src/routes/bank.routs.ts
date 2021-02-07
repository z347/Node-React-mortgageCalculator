import { Router } from 'express';

import { allFieldsValidation, fieldIdValidation } from '../middlewares/bank-validations';
import {
    getAllBanksController,
    createNewBankController,
    deleteOneBankController,
    editOneBankController
} from '../controllers/bank.controllers';

const router = Router();

router.get('/banks-info', getAllBanksController);
router.post('/banks-info', allFieldsValidation, createNewBankController);
router.patch('/banks-info', fieldIdValidation, editOneBankController);
router.delete('/bank:id', deleteOneBankController);

export default router;
