import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import combinedReducers from './redux/reducers/CombinedReducers'
import App from './containers/app/app';

import './assets/fonts/roboto/Roboto-Light.ttf';


let store = createStore(combinedReducers, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('content')
);
