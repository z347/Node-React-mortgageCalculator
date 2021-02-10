export interface IEditBankArguments {
  name: string;
  interestRate: number;
  maximumLoan: number;
  minimumDownPayment: number;
  loanTerm: number;
}

export interface IEditBankItem {
  _id: string;
  name: string;
  interestRate: number;
  maximumLoan: number;
  minimumDownPayment: number;
  loanTerm: number;
}
