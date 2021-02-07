export const SET_ACTIVE_BANK = 'SET_ACTIVE_BANK';

export type ActiveBankType = {
  _id: string;
  name: string;
  interestRate: number;
  maximumLoan: number;
  minimumDownPayment: number;
  loanTerm: number;
};

export interface IDefaultState {
  payload: ActiveBankType;
}

export interface IActiveBankIsSet {
  type: typeof SET_ACTIVE_BANK;
  payload: ActiveBankType;
}
