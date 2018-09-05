import React, { Component } from 'react'
import NavMain from './NavMain'

import './../../css/nav.css'

class NavBar extends Component {

  render(){
    return(
      <div className='navbar'>
        <NavMain />
      </div>
    )
  }

}

export default NavBar;
