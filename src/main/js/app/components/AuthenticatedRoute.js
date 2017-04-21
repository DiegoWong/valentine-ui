import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const AuthenticatedRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={props => {
      return (
        rest.authenticated ? (
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
  )
} ;

export default AuthenticatedRoute