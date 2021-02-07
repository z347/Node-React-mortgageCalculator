import { ApiUrlInfo } from 'data/api/url-info';
import { IEditBankArguments } from 'types/handlers/edit-bank.arguments';
import {
  EDIT_BANK_REQUEST_IS_LOADING,
  EDIT_BANK_REQUEST_IS_SUCCESS,
  EDIT_BANK_REQUEST_IS_ERROR,
  IEditIsLoading,
  IEditIsSuccess,
  IEditIsError,
  ThunkActionType,
  ThunkDispatchType,
} from '../types/edit-bank.types';

const { domain, prefix, banksInfo } = ApiUrlInfo;

/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-use-before-define */

function editRequest(data: IEditBankArguments): ThunkActionType {
  return async (dispatch: ThunkDispatchType): Promise<void> => {
    try {
      dispatch(editBankIsLoading());

      const response = await fetch(domain + prefix + banksInfo, {
        method: 'PATCH',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(data),
      });

      response.ok ? dispatch(editBankIsSuccess()) : dispatch(editBankIsError());
    } catch (e) {
      dispatch(editBankIsError());
    }
  };
}

/* eslint-enable */

function editBankIsLoading(): IEditIsLoading {
  return {
    type: EDIT_BANK_REQUEST_IS_LOADING,
    loading: true,
  };
}

function editBankIsSuccess(): IEditIsSuccess {
  return {
    type: EDIT_BANK_REQUEST_IS_SUCCESS,
    loading: false,
    edit: true,
  };
}

function editBankIsError(): IEditIsError {
  return {
    type: EDIT_BANK_REQUEST_IS_ERROR,
    loading: false,
    error: true,
  };
}

// eslint-disable-next-line
export { editRequest, editBankIsLoading, editBankIsSuccess, editBankIsError };
