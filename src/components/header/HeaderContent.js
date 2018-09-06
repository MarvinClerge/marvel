import React, { Component } from 'react'
import './../../css/header.css'

class HeaderContent extends Component {

  render(){
    let {
      backgroundImage,
      category,
      title,
      description
    } = this.props.content


    let backgroundStyle = {
      backgroundImage: 'url(' + backgroundImage + ')'
    }


    return(
      <div className='header-content-container' style={backgroundStyle}>
        <div className='header-content'>
          <div className='header-text'>

            <p className='header-category'>
              {category}
            </p>

            <p className='header-title'>
              {title}
            </p>

            <p className='header-description'>
              {description}
            </p>
            
          </div>
        </div>
      </div>
    )
  }

}

export default HeaderContent;
