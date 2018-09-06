import React, { Component } from 'react'
import './../../css/header.css'

class HeaderControls extends Component {
  mapContent = () => {
    return this.props.content.map((item,index) => {

      let divClassName = 'header-controls-item'
      if (index === this.props.activeContent) {
        divClassName = 'header-controls-item header-item-active'
      }

      return(
        <div
          className={divClassName}
          onClick={() => this.props.changeActive(index)}
        >
          {item.title}
        </div>
      )
    })
  }

  render(){
    return(
      <div className='header-controls-container'>
        <div className='header-controls'>
          {this.mapContent()}
        </div>
      </div>
    )
  }

}

export default HeaderControls;
