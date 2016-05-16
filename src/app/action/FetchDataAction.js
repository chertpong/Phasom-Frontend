import { FETCH_DATA_FAILURE } from './../constant/action-type';

export function fetchDataFailure(message) {
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_DATA_FAILURE,
      errorMessage: message,
    });
  };
}
