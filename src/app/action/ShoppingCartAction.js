import axios from 'axios';
import { API_URL } from './../../config';
import {
  ADD_TO_SHOPPING_CART,
  UPDATE_AMOUNT_OF_SELECTED_PRODUCT,
  DELETE_SELECTED_PRODUCT,
  FETCH_DATA_FAILURE,
  SELECT_PAYMENT_METHOD,
} from './../constant/action-type';
import { fetchDataFailure } from './FetchDataAction';

export function addToShoppingCart(id, amount = 1) {
  return (dispatch) => {
    axios
      .get(`${API_URL}/api/product/${id}`)
      .then((response) => {
        const product = response.data;
        dispatch({
          type: ADD_TO_SHOPPING_CART,
          payload: { selectedProduct: { product, Amount: amount } },
        });
      })
      .catch(err => {
        fetchDataFailure({ error: err, errorMessage: `Couldn\'t fetch product id: ${id}` });
      });
  };
}

export function selectPaymentMethod(paymentMethod) {
  return (dispatch) => {
    dispatch({
      type: SELECT_PAYMENT_METHOD,
      paymentMethod,
    });
  };
}

export function onSelectedProductAmountChange(id, amount) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_AMOUNT_OF_SELECTED_PRODUCT,
      payload: { selectedProduct: { product: { Id: id }, Amount: amount } },
    });
  };
}

export function deleteSelectedProduct(id) {
  return (dispatch) => {
    dispatch({
      type: DELETE_SELECTED_PRODUCT,
      payload: { selectedProduct: { product: { Id: id }} },
    });
  };
}
