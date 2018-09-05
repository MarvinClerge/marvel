import React, { Component } from 'react'

class SubNav extends Component {
  state = {
    active: null
  }

  setActive = (event) => {
    event.persist()
    this.setState({
      active: event.target.id
    },() => {
      event.target.classList.add('sub-nav-item-active')
    })
  }

  setInactive = (event) => {
    event.persist()
    this.setState({
      active: null
    },() => {
      event.target.classList.remove('sub-nav-item-active')
    })
  }

  renderCategory = () => {
    if (this.state.active) {
      return(
        <div className='sub-nav-category'>
          <div>
            {this.state.active}
          </div>
        </div>
      )
    }
  }

  render(){
    return(
      <div className='sub-nav-container'>
        <div className='sub-nav'>
          <ul>
            <li onMouseEnter={this.setActive} onMouseLeave={this.setInactive}
            id='videos' className='sub-nav-item'>
              WATCH VIDEOS
            </li>

            <li onMouseEnter={this.setActive} onMouseLeave={this.setInactive}
            id='explore' className='sub-nav-item'>
              EXPLORE THE UNIVERSE
            </li>

            <li onMouseEnter={this.setActive} onMouseLeave={this.setInactive}
            id='comics' className='sub-nav-item'>
              READ COMICS
            </li>

            <li onMouseEnter={this.setActive} onMouseLeave={this.setInactive}
            id='movies' className='sub-nav-item'>
              MOVIES
            </li>

            <li onMouseEnter={this.setActive} onMouseLeave={this.setInactive}
            id='shows' className='sub-nav-item'>
              TV SHOWS
            </li>

            <li onMouseEnter={this.setActive} onMouseLeave={this.setInactive}
            id='games' className='sub-nav-item'>
              GAMES
            </li>

            <li onMouseEnter={this.setActive} onMouseLeave={this.setInactive}
            id='more' className='sub-nav-item'>
              MORE
            </li>
          </ul>

        </div>

        {this.renderCategory()}
      </div>
    )
  }
}

export default SubNav;
