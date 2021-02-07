import { ApiUrlInfo } from 'data/api/url-info';
import {
  DELETE_BANK_REQUEST_IS_ERROR,
  DELETE_BANK_REQUEST_IS_LOADING,
  DELETE_BANK_REQUEST_IS_SUCCESS,
  IDeleteBankIsError,
  IDeleteBankIsLoading,
  IDeleteBankIsSuccess,
  ThunkActionType,
  ThunkDispatchType,
} from '../types/delete-from-list.types';

const { prefix, deleteBank } = ApiUrlInfo;

/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-use-before-define */

function requestDeleteOneBankFromList(bankId: string): ThunkActionType {
  return async (dispatch: ThunkDispatchType): Promise<void> => {
    try {
      dispatch(deleteBankIsLoading());

      const response = await fetch(`${prefix}${deleteBank}:${bankId}`, {
        method: 'DELETE',
        cache: 'no-cache',
      });

      response.ok && response.status === 200
        ? dispatch(deleteBankIsSuccess())
        : dispatch(deleteBankIsError());
    } catch (e) {
      dispatch(deleteBankIsError());
    }
  };
}

/* eslint-enable */

function deleteBankIsLoading(): IDeleteBankIsLoading {
  return {
    type: DELETE_BANK_REQUEST_IS_LOADING,
    loading: true,
  };
}

function deleteBankIsSuccess(): IDeleteBankIsSuccess {
  return {
    type: DELETE_BANK_REQUEST_IS_SUCCESS,
    loading: false,
    delete: true,
  };
}

function deleteBankIsError(): IDeleteBankIsError {
  return {
    type: DELETE_BANK_REQUEST_IS_ERROR,
    loading: false,
    error: true,
  };
}

export {
  requestDeleteOneBankFromList,
  deleteBankIsLoading,
  deleteBankIsSuccess,
  deleteBankIsError,
};
