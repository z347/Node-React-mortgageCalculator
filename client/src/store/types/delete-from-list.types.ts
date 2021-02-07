import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export const DELETE_BANK_REQUEST_IS_LOADING = 'DELETE_BANK_REQUEST_IS_LOADING';
export const DELETE_BANK_REQUEST_IS_SUCCESS = 'DELETE_BANK_REQUEST_IS_SUCCESS';
export const DELETE_BANK_REQUEST_IS_ERROR = 'DELETE_BANK_REQUEST_IS_ERROR';

export interface IDefaultState {
  loading: boolean;
  delete: boolean;
  error: boolean;
}

export interface IDeleteBankIsLoading {
  type: typeof DELETE_BANK_REQUEST_IS_LOADING;
  loading: boolean;
}

export interface IDeleteBankIsSuccess {
  type: typeof DELETE_BANK_REQUEST_IS_SUCCESS;
  loading: boolean;
  delete: boolean;
}

export interface IDeleteBankIsError {
  type: typeof DELETE_BANK_REQUEST_IS_ERROR;
  loading: boolean;
  error: boolean;
}

export type DeleteBankDispatchTypes =
  | IDeleteBankIsLoading
  | IDeleteBankIsSuccess
  | IDeleteBankIsError;

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
