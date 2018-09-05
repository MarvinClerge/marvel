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
      event.target.classList.add('nav-item-active')
    })
  }

  setInactive = (event) => {
    event.persist()
    this.setState({
      active: null
    },() => {
      event.target.classList.remove('nav-item-active')
    })
  }

  render(){
    console.log(this.state);
    return(
      <div className='sub-nav-container'>
        <div className='sub-nav'>
          <ul>
            <li onMouseEnter={this.setActive}
              onMouseLeave={this.setInactive} id='vnameeos'>
              WATCH VIDEOS
            </li>

            <li onMouseEnter={this.setActive}
              onMouseLeave={this.setInactive} id='explore'>
              EXPLORE THE UNIVERSE
            </li>

            <li onMouseEnter={this.setActive}
              onMouseLeave={this.setInactive} id='comics'>
              READ COMICS
            </li>

            <li onMouseEnter={this.setActive}
              onMouseLeave={this.setInactive} id='movies'>
              MOVIES
            </li>

            <li onMouseEnter={this.setActive}
              onMouseLeave={this.setInactive} id='shows'>
              TV SHOWS
            </li>

            <li onMouseEnter={this.setActive}
              onMouseLeave={this.setInactive} id='games'>
              GAMES
            </li>

            <li onMouseEnter={this.setActive}
              onMouseLeave={this.setInactive} id='more'>
              MORE
            </li>

          </ul>
        </div>
      </div>
    )
  }
}

export default SubNav;
