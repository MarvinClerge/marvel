import React, { Component } from 'react'
import './../../css/header.css'

class Header extends Component {

  render(){
    return(
      <div className='header-container'>
        <div className='header'>
          <div className='header-content'>
            <p className='header-category'>
              Marvel's Avengers: Black Panther's Quest
            </p>

            <p className='header-title'>
              Watch the Trailer for the New Season
            </p>

            <p className='header-text'>
              The Black Panther begins new adventures on Sunday, September 23 at 9:00PM ET/PT on Disney XD!
            </p>
          </div>


        </div>
      </div>
    )
  }
}

export default Header;
