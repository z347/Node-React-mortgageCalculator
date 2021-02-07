import { combineReducers } from 'redux';

import { listOfBanksReducer } from './get-list.reducer';
import { deleteBankReducer } from './delete-from-list.reducer';
import { creatNewBankReducer } from './create-new-bank.reducer';
import { editBankReducer } from './edit-bank.reducer';
import { activeBankReducer } from './active-bank.reducer';

const rootReducer = combineReducers({
  list: listOfBanksReducer,
  deleteBank: deleteBankReducer,
  createBank: creatNewBankReducer,
  editBank: editBankReducer,
  activeBank: activeBankReducer,
});

export { rootReducer };
