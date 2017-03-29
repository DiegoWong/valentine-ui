import React from 'react';
import Product from './../product/product';
import Homepage from './../homepage/homepage';
import Login from './../../login/login';
import AuthenticatedRoute from './../../components/AuthenticatedRoute'
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './app.scss'

class App extends React.Component {

  static propTypes = {
    authenticated: React.PropTypes.bool
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/product'>Product</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
          <Route path='/login' component={Login} />
          <AuthenticatedRoute path='/product' component={Product} authenticated={this.props.authenticated} />
          <Route exact={ true } path='/' component={Homepage} />
        </div>
      </Router>
    )
  }

}

const mapStateToProps = (state) => ({
  authenticated: state.Authentication.authenticated
})

export default connect(mapStateToProps)(App);