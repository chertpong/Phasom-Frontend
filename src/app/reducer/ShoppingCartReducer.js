import {
  GET_ALL_SELECTED_PRODUCTS,
  UPDATE_AMOUNT_OF_SELECTED_PRODUCT,
  DELETE_SELECTED_PRODUCT,
  ADD_TO_SHOPPING_CART,
} from './../constant/action-type';

export const initialState = {
  selectedProducts: [],
};

const hasProductId = (selectedProducts, id) => (
  selectedProducts.some(selectedProduct => (selectedProduct.product.Id === id))
);

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SELECTED_PRODUCTS:
      return Object.assign({}, state, { selectedProducts: action.payload.selectedProducts });
    case ADD_TO_SHOPPING_CART:
      return Object.assign({}, state, {
        selectedProducts:
          hasProductId(state.selectedProducts, action.payload.selectedProduct.product.Id) ?
          state.selectedProducts.map(
            (s) => (s.product.Id === action.payload.selectedProduct.product.Id) ?
              Object.assign({}, s, { Amount: s.Amount + action.payload.selectedProduct.Amount }) : s
          )
          : Object.assign([], [...state.selectedProducts, action.payload.selectedProduct]),
      });
    case UPDATE_AMOUNT_OF_SELECTED_PRODUCT:
      return Object.assign({}, state, {
        selectedProducts: state.selectedProducts.map(selectedProduct =>
          (selectedProduct.product.Id === action.payload.selectedProduct.product.Id) ?
          Object.assign({}, selectedProduct, { Amount: parseInt(action.payload.selectedProduct.Amount, 10) }) :
          selectedProduct
        ),
      });
    case DELETE_SELECTED_PRODUCT:
      return Object.assign({}, state, {
        selectedProducts: state.selectedProducts.filter(selectedProduct =>
          (selectedProduct.product.Id !== action.payload.selectedProduct.product.Id)
        ),
      });
    default:
      return state;
  }
};


export default cartReducer;

