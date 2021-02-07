import { ApiUrlInfo } from 'data/api/url-info';
import { ICreationBankArguments } from 'types/handlers/creation-bank.arguments';
import {
  CREATE_BANK_IS_LOADING,
  CREATE_BANK_IS_SUCCESS,
  CREATE_BANK_IS_ERROR,
  ICreateIsLoading,
  ICreateIsSuccess,
  ICreateIsError,
  ThunkActionType,
  ThunkDispatchType,
} from '../types/create-new-bank.types';

const { prefix, banksInfo } = ApiUrlInfo;

/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-use-before-define */

function creationRequest(data: ICreationBankArguments): ThunkActionType {
  return async (dispatch: ThunkDispatchType): Promise<void> => {
    try {
      dispatch(creationIsLoading());

      const response = await fetch(prefix + banksInfo, {
        method: 'POST',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(data),
      });

      response.ok ? dispatch(creationIsSuccess()) : dispatch(creationIsError());
    } catch (e) {
      dispatch(creationIsError());
    }
  };
}

/* eslint-enable */

function creationIsLoading(): ICreateIsLoading {
  return {
    type: CREATE_BANK_IS_LOADING,
    loading: true,
  };
}

function creationIsSuccess(): ICreateIsSuccess {
  return {
    type: CREATE_BANK_IS_SUCCESS,
    loading: false,
    success: true,
  };
}

function creationIsError(): ICreateIsError {
  return {
    type: CREATE_BANK_IS_ERROR,
    loading: false,
    error: true,
  };
}

// eslint-disable-next-line
export { creationRequest, creationIsLoading, creationIsSuccess, creationIsError };
