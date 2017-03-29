import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const AuthenticatedRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => {
      return (
        props.authenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect to={{
              pathname: '/login',
              state: { from: props.location }
            }}/>
          )
      )
    }
  }/>
);

export default AuthenticatedRoute