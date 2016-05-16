import axios from 'axios';
import { API_URL } from './../../config';
import {
  GET_PRODUCT_BY_ID, GET_ALL_PRODUCT, ADD_PRODUCT,
  UPDATE_PRODUCT, DELETE_PRODUCT,
  FETCH_DATA_FAILURE,
} from './../constant/action-type';
import { fetchDataFailure } from './FetchDataAction';

export function getAllProduct() {
  return (dispatch) => {
    axios
      .get(`${API_URL}/api/product`)
      .then(({ data }) => {
        dispatch({
          type: GET_ALL_PRODUCT,
          payload: { products: data },
        });
      })
      .catch(err => {
        fetchDataFailure({ error: err, errorMessage: 'Couldn\'t fetch products' });
      });
  };
}

export function getProductById(id) {
  return (dispatch, getState) => {
    dispatch({
      type: GET_PRODUCT_BY_ID,
      id,
    });
  };
}

export function addProduct(product) {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_PRODUCT,
      product,
    });
  };
}

export function updateProduct(product) {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_PRODUCT,
      product,
    });
  };
}

export function deleteProduct(productId) {
  return (dispatch, getState) => {
    dispatch({
      type: DELETE_PRODUCT,
      productId,
    });
  };
}

