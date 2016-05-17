import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, browserHistory, IndexRoute, useRouterHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import createHashHistory from 'history/lib/createHashHistory';

import configureStore from './app/reducer/Store';

const history = useRouterHistory(createHashHistory)(
);
const store = configureStore();
const syncedHistory = syncHistoryWithStore(history, store);

// Config
import { API_URL, muiTheme } from './config';

// Styles
import './app/style/style.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'material-design-icons/iconfont/material-icons.css';
import 'flexboxgrid/dist/flexboxgrid.css';
import themeDecorator from 'material-ui/styles/themeDecorator';

injectTapEventPlugin();

// Containers
import App from './app/App';
import Home from './app/container/Home';
import ProductListContainer from './app/container/product/ProductListContainer';
import ProductDetailContainer from './app/container/product/ProductDetailContainer';

import NotFound from './app/container/NotFound';

render(
  (<Provider store={store}>
    <Router history={syncedHistory} store={store}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/products" component={ProductListContainer} />
        <Route path="/products/:id" component={ProductDetailContainer} />
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Route>
    </Router>
  </Provider>)
  , document.querySelector('#app')
);
