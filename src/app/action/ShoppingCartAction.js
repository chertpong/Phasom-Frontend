import axios from 'axios';
import { API_URL } from './../../config';
import {
  ADD_TO_SHOPPING_CART,
  ADD_TO_SHOPPING_CART_SUCCESS,
  FETCH_DATA_FAILURE,
} from './../constant/action-type';
import { fetchDataFailure } from './FetchDataAction';

export function addToShoppingCart(id) {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_SHOPPING_CART,
      id,
    });
    axios
      .post(`${API_URL}/api/shoppingCart`, { Id: id })
      .then((response) => {
        dispatch({
          type: ADD_TO_SHOPPING_CART_SUCCESS,
          payload: { shoppingCart: response.data },
        });
      })
      .catch(err => {
        fetchDataFailure({ error: err, errorMessage: 'Couldn\'t add product to shopping cart' });
      });
  };
}