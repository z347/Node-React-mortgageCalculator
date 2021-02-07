import {
  CREATE_BANK_IS_LOADING,
  CREATE_BANK_IS_SUCCESS,
  CREATE_BANK_IS_ERROR,
  CreationDispatchTypes,
  IDefaultState,
} from '../types/create-new-bank.types';

const initialState: IDefaultState = {
  loading: false,
  success: false,
  error: false,
};

function creatNewBankReducer(
  state = initialState,
  action: CreationDispatchTypes,
): IDefaultState {
  switch (action.type) {
    case CREATE_BANK_IS_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case CREATE_BANK_IS_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        success: action.success,
      };
    case CREATE_BANK_IS_ERROR:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    default:
      return state;
  }
}

export { creatNewBankReducer };
