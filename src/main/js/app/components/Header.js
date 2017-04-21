import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar/AppBar'

import './Header.scss'

const Header = () => {
  return(
    <AppBar>
      <ul className='nav-bar'>
        <li className='nav-bar-item'><Link to='/'>Home</Link></li>
        <li className='nav-bar-item'><Link to='/product'>Product</Link></li>
        <li className='nav-bar-item'><Link to='/login'>Login</Link></li>
      </ul>
    </AppBar>
  )
}

export default Header