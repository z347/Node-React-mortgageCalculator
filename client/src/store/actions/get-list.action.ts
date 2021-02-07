import { ApiUrlInfo } from 'data/api/url-info';
import {
  GET_LIST_REQUEST_IS_LOADING,
  GET_LIST_REQUEST_IS_SUCCESS,
  GET_LIST_REQUEST_IS_ERROR,
  IGetListIsLoading,
  IGetListIsSuccess,
  IGetListIsError,
  ListType,
  ThunkActionType,
  ThunkDispatchType,
} from '../types/get-list.types';

const { domain, prefix, banksInfo } = ApiUrlInfo;

/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-use-before-define */

function requestGetListWithBanks(): ThunkActionType {
  return async (dispatch: ThunkDispatchType): Promise<void> => {
    try {
      dispatch(listIsLoading());

      const response = await fetch(domain + prefix + banksInfo, {
        method: 'GET',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      });
      const answer: ListType = await response.json();

      response.ok ? dispatch(listIsSuccess(answer)) : dispatch(listIsError());
    } catch (e) {
      dispatch(listIsError());
    }
  };
}

/* eslint-enable */

function listIsLoading(): IGetListIsLoading {
  return {
    type: GET_LIST_REQUEST_IS_LOADING,
    loading: true,
  };
}

function listIsSuccess(data: ListType): IGetListIsSuccess {
  return {
    type: GET_LIST_REQUEST_IS_SUCCESS,
    loading: false,
    payload: data,
  };
}

function listIsError(): IGetListIsError {
  return {
    type: GET_LIST_REQUEST_IS_ERROR,
    loading: false,
    error: true,
  };
}

// eslint-disable-next-line
export { requestGetListWithBanks, listIsLoading, listIsSuccess, listIsError };
