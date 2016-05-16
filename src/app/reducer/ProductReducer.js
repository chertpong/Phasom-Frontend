import {
  GET_ALL_PRODUCT, GET_PRODUCT_BY_ID, ADD_PRODUCT,
  UPDATE_PRODUCT, DELETE_PRODUCT,
  FETCH_DATA_FAILURE,
} from './../constant/action-type';

export const initialState = {
  products: [],
  product: undefined,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return Object.assign({}, state, { products: action.payload.products });
    case GET_PRODUCT_BY_ID:
      return Object.assign({}, state, { product: action.payload.product });
    default:
      return state;
  }
};

export default productReducer;

