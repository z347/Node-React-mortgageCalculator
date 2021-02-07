import {
  EDIT_BANK_REQUEST_IS_LOADING,
  EDIT_BANK_REQUEST_IS_SUCCESS,
  EDIT_BANK_REQUEST_IS_ERROR,
  EditDispatchTypes,
  IDefaultState,
} from '../types/edit-bank.types';

const initialState: IDefaultState = {
  loading: false,
  edit: false,
  error: false,
};

function editBankReducer(
  state = initialState,
  action: EditDispatchTypes,
): IDefaultState {
  switch (action.type) {
    case EDIT_BANK_REQUEST_IS_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case EDIT_BANK_REQUEST_IS_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        edit: action.edit,
      };
    case EDIT_BANK_REQUEST_IS_ERROR:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    default:
      return state;
  }
}

export { editBankReducer };
