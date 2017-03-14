import {render} from 'react-dom';
import React from 'react';
import Login from './login/login';
import Product from './containers/product/product';
import './assets/fonts/roboto/Roboto-Light.ttf';

import {  BrowserRouter as Router, Route } from 'react-router-dom';



render(
  <Router>
    <div>
      <Route path="/" component={Login}/>
      <Route path="/product" component={Product} />
    </div>
  </Router>,
  document.getElementById('content'));