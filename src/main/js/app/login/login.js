import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom'

class Login extends React.Component {

  render() {
    return (
      <div>
        <h1>Demo</h1>
        <label>login with Valentine:</label>
        <a href="/login/valentine">click here</a>
        <Link to="/product">Go to product</Link>
      </div>
    )
  }

}


export default Login;