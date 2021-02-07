"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bank_validations_1 = require("../middlewares/bank-validations");
const bank_controllers_1 = require("../controllers/bank.controllers");
const router = express_1.Router();
router.get('/banks-info', bank_controllers_1.getAllBanksController);
router.post('/banks-info', bank_validations_1.allFieldsValidation, bank_controllers_1.createNewBankController);
router.patch('/banks-info', bank_validations_1.fieldIdValidation, bank_controllers_1.editOneBankController);
router.delete('/bank:id', bank_controllers_1.deleteOneBankController);
exports.default = router;
//# sourceMappingURL=bank.routs.js.map