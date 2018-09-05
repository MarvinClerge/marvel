import React, { Component } from 'react'

class MainNav extends Component {

  state = {
    active: false
  }

  onClick = () => {
    this.setState({
      active: !this.state.active
    })
  }

  renderSignIn = () => {
    if (this.state.active) {
      return(
        <div className='main-nav-signin'>
          <img
            height='52px'
            src='https://terrigen-cdn-dev.marvel.com/content/prod/2x/marvel_insider-topnav-logo-large2x_2.png'
          />

          <button className='nav-signin-button signin'>
            SIGN IN
          </button>

          <button className='nav-signin-button create-account'>
            CREATE AN ACCOUNT
          </button>
        </div>
      )
    }
  }

  render(){

    return(
      <div className='main-nav-container'>
        <div className='main-nav'>
          <div className={`nav-item ${this.state.active ? 'nav-item-active' : null}`} onClick={this.onClick}>
            SIGN IN
          </div>

          {this.renderSignIn()}

          <div className='nav-item'>
            <img
              src='http://thetechnews.com/wp-content/uploads/2018/03/2_The-latest-Marvel-logo.jpg'
              height='52px'
            />
          </div>

          <div className='nav-item'>
            <img
              src='https://previews.123rf.com/images/djvstock/djvstock1705/djvstock170502207/77260445-magnifying-glass-icon-over-white-background-vector-illustration.jpg'
              height='30px'
            />
          </div>
        </div>
      </div>
    )
  }

}

export default MainNav;
