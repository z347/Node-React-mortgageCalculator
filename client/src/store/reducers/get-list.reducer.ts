import {
  GET_LIST_REQUEST_IS_LOADING,
  GET_LIST_REQUEST_IS_SUCCESS,
  GET_LIST_REQUEST_IS_ERROR,
  IDefaultState,
  ListDispatchTypes,
} from '../types/get-list.types';

const initialState: IDefaultState = {
  loading: false,
  payload: [
    {
      _id: 'plug',
      name: 'plug',
      interestRate: 0,
      maximumLoan: 0,
      minimumDownPayment: 0,
      loanTerm: 0,
    },
  ],
  error: false,
};

function listOfBanksReducer(state = initialState, action: ListDispatchTypes): IDefaultState {
  switch (action.type) {
    case GET_LIST_REQUEST_IS_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case GET_LIST_REQUEST_IS_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        payload: action.payload,
      };
    case GET_LIST_REQUEST_IS_ERROR:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    default:
      return state;
  }
}

export { listOfBanksReducer };
