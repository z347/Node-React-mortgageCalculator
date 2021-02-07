import {
  DELETE_BANK_REQUEST_IS_LOADING,
  DELETE_BANK_REQUEST_IS_SUCCESS,
  DELETE_BANK_REQUEST_IS_ERROR,
  DeleteBankDispatchTypes,
  IDefaultState,
} from '../types/delete-from-list.types';

const initialState: IDefaultState = {
  loading: false,
  delete: false,
  error: false,
};

function deleteBankReducer(state = initialState, action: DeleteBankDispatchTypes): IDefaultState {
  switch (action.type) {
    case DELETE_BANK_REQUEST_IS_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case DELETE_BANK_REQUEST_IS_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        delete: action.delete,
      };
    case DELETE_BANK_REQUEST_IS_ERROR:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    default:
      return state;
  }
}

export { deleteBankReducer };
