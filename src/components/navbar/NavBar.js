import React, { Component } from 'react'
import MainNav from './MainNav'
import SubNav from './SubNav'

import './../../css/nav.css'

class NavBar extends Component {

  render(){
    return(
      <div className='navbar'>
        <MainNav />
        <SubNav />
      </div>
    )
  }

}

export default NavBar;
