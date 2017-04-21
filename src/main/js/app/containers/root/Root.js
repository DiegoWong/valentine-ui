import React from 'react';
import Product from './../product/product';
import Homepage from './../homepage/homepage';
import Login from './../../login/login';
import AuthenticatedRoute from './../../components/AuthenticatedRoute'
import {  BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import { getAccessToken } from '../../redux/actionCreators'

class Root extends React.Component {

  static propTypes = {
    authenticated: React.PropTypes.bool,
    getAccessToken: React.PropTypes.func
  }

  componentWillMount() {
    this.props.getAccessToken();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/login' component={Login} />
          <AuthenticatedRoute path='/product' component={Product} authenticated={this.props.authenticated} />
          <Route exact path='/' component={Homepage} />
        </div>
      </BrowserRouter>
    )
  }

}

const mapStateToProps = (state) => ({
  authenticated: state.Authentication.authenticated
});

const mapDispatchToProps = (dispatch) => ({
  getAccessToken: () => {
   dispatch(getAccessToken())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Root);