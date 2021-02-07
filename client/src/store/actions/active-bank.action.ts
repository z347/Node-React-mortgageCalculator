import { SET_ACTIVE_BANK, ActiveBankType, IActiveBankIsSet } from '../types/active-bank.types';

function activeBankIsSet(data: ActiveBankType): IActiveBankIsSet {
  return {
    type: SET_ACTIVE_BANK,
    payload: data,
  };
}

export { activeBankIsSet };
