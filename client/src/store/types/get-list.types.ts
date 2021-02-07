import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export const GET_LIST_REQUEST_IS_LOADING = 'GET_LIST_REQUEST_IS_LOADING';
export const GET_LIST_REQUEST_IS_SUCCESS = 'GET_LIST_REQUEST_IS_SUCCESS';
export const GET_LIST_REQUEST_IS_ERROR = 'GET_LIST_REQUEST_IS_ERROR';

export type ListType = [
  {
    _id: string;
    name: string;
    interestRate: number;
    maximumLoan: number;
    minimumDownPayment: number;
    loanTerm: number;
  },
];

export interface IDefaultState {
  loading: boolean;
  payload: ListType;
  error: boolean;
}

export interface IGetListIsLoading {
  type: typeof GET_LIST_REQUEST_IS_LOADING;
  loading: boolean;
}

export interface IGetListIsSuccess {
  type: typeof GET_LIST_REQUEST_IS_SUCCESS;
  loading: boolean;
  payload: ListType;
}

export interface IGetListIsError {
  type: typeof GET_LIST_REQUEST_IS_ERROR;
  loading: boolean;
  error: boolean;
}

export type ListDispatchTypes = IGetListIsLoading | IGetListIsSuccess | IGetListIsError;

/* eslint-disable @typescript-eslint/indent */
export type ThunkActionType = ThunkAction<
  Promise<void>,
  Record<string, never>,
  Record<string, never>,
  AnyAction
>;

export type ThunkDispatchType = ThunkDispatch<
  Record<string, never>,
  Record<string, never>,
  AnyAction
>;
