import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { API_URL } from './config';

import App from './app/App';

import './app/style/style.scss';

import Home from './app/container/Home';

render(
  (<Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/home" component={Home} />
    </Route>
  </Router>)
  , document.querySelector('#app')
);
