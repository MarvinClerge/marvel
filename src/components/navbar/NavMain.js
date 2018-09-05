import React, { Component } from 'react'

class NavMain extends Component {

  state = {
    active: true
  }

  onClick = () => {
    this.setState({
      active: !this.state.active
    })
  }

  renderSignIn = () => {
    if (this.state.active) {
      return(
        <div className='nav-main-sub'>
          <img
            height='52px'
            src='https://terrigen-cdn-dev.marvel.com/content/prod/2x/marvel_insider-topnav-logo-large2x_2.png'
          />

          <button className='nav-sub-button signin'>
            SIGN IN
          </button>

          <button className='nav-sub-button create-account'>
            CREATE AN ACCOUNT
          </button>
        </div>
      )
    }
  }

  render(){
    console.log(this.state.active)

    return(
      <div className='nav-main-container'>
        <div className='nav-main'>
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

export default NavMain;
