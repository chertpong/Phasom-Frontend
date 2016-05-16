import { PROFILE, CURRENT_PROFILE } from './../../config';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './Reducers';

// configure redux-devtools-extension
// @see https://github.com/zalmoxisus/redux-devtools-extension

/**
 * Logs all actions and states after they are dispatched.
 */
const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
};

export default (initialState = {}) => {
  let middleware = applyMiddleware(thunk);
  if (CURRENT_PROFILE === PROFILE.DEVELOPMENT) {
    middleware = applyMiddleware(thunk, logger);
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
      middleware = compose(middleware, devToolsExtension());
    }
  }
  return createStore(Reducers, initialState, middleware);
};
