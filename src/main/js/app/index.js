import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import  thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import combinedReducers from './redux/reducers/CombinedReducers'
import Root from './containers/root/Root';
import './styles.scss'


injectTapEventPlugin();

let store = createStore(combinedReducers, compose(
  applyMiddleware(thunk),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
));

render(
  <Provider store={ store }>
    <MuiThemeProvider>
      <Root />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('content')
);
