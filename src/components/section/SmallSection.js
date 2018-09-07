import React, { Component } from 'react'
import './../../css/section.css'

const SmallSection = (props) => {
  const mapContent = () => {
    return props.content.map((item, index) => {
      return (
        <div key={index} className='small-section-item'>
          <div className='small-section-item-image'>
            <img src={item.image} />
          </div>
          <p className='small-section-text'>
            {item.category}
          </p>
          <p className='small-section-title'>
            {item.title}
          </p>
        </div>
      )
    })
  }

  return(
    <div className='small-section-container'>
      <div className='small-section'>
        <p className='large-section-title'>
          {props.title}
        </p>
        
        <div className='small-section-items'>
          {mapContent()}
        </div>
      </div>
    </div>
  )
}

export default SmallSection;
