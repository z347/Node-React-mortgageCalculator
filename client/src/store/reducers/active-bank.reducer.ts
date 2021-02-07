import { IDefaultState, SET_ACTIVE_BANK, IActiveBankIsSet } from '../types/active-bank.types';

const initialState: IDefaultState = {
  payload: {
    _id: 'plug',
    name: 'plug',
    interestRate: 0,
    maximumLoan: 0,
    minimumDownPayment: 0,
    loanTerm: 0,
  },
};

function activeBankReducer(state = initialState, action: IActiveBankIsSet): IDefaultState {
  switch (action.type) {
    case SET_ACTIVE_BANK:
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return state;
  }
}

export { activeBankReducer };
