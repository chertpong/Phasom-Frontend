import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import ProductReducer from './ProductReducer';
import FetchDataReducer from './FetchDataReducer';
import ShoppingCartReducer from './ShoppingCartReducer';
export default combineReducers({
  routing: routerReducer,
  products: ProductReducer,
  FetchDataReducer,
  cart: ShoppingCartReducer,
});
