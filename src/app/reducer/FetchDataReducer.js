import { FETCH_DATA_FAILURE } from './../constant/action-type';

export const initialState = {
  error: '',
  errorMessage: '',
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_FAILURE:
      return [...state, { error: action.error, errorMessage: action.errorMessage }];
    default:
      return state;
  }
}


