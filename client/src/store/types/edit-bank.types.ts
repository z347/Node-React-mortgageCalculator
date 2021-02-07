import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export const EDIT_BANK_REQUEST_IS_LOADING = 'EDIT_BANK_REQUEST_IS_LOADING';
export const EDIT_BANK_REQUEST_IS_SUCCESS = 'EDIT_BANK_REQUEST_IS_SUCCESS';
export const EDIT_BANK_REQUEST_IS_ERROR = 'EDIT_BANK_REQUEST_IS_ERROR';

export interface IDefaultState {
  loading: boolean;
  edit: boolean;
  error: boolean;
}

export interface IEditIsLoading {
  type: typeof EDIT_BANK_REQUEST_IS_LOADING;
  loading: boolean;
}

export interface IEditIsSuccess {
  type: typeof EDIT_BANK_REQUEST_IS_SUCCESS;
  loading: boolean;
  edit: boolean;
}

export interface IEditIsError {
  type: typeof EDIT_BANK_REQUEST_IS_ERROR;
  loading: boolean;
  error: boolean;
}

export type EditDispatchTypes = IEditIsLoading | IEditIsSuccess | IEditIsError;

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
