import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export const CREATE_BANK_IS_LOADING = 'CREATE_BANK_IS_LOADING';
export const CREATE_BANK_IS_SUCCESS = 'CREATE_BANK_IS_SUCCESS';
export const CREATE_BANK_IS_ERROR = 'CREATE_BANK_IS_ERROR';

export interface IDefaultState {
  loading: boolean;
  success: boolean;
  error: boolean;
}

export interface ICreateIsLoading {
  type: typeof CREATE_BANK_IS_LOADING;
  loading: boolean;
}

export interface ICreateIsSuccess {
  type: typeof CREATE_BANK_IS_SUCCESS;
  loading: boolean;
  success: boolean;
}

export interface ICreateIsError {
  type: typeof CREATE_BANK_IS_ERROR;
  loading: boolean;
  error: boolean;
}

export type CreationDispatchTypes = ICreateIsLoading | ICreateIsSuccess | ICreateIsError;

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
