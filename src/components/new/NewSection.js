import React from 'react'
import { newData } from './newData'
import './../../css/new.css'

const NewSection = (props) => {
  const mapContent = () => {
    return newData.map((item, index) => {
      return(
        <div key={index} className='new-item'>
          <img src={item.image} width='183' height='274' />
          <p className='new-title'>
            {item.title}
          </p>
          <p className='new-text'>
            {item.date}
          </p>
        </div>
      )
    })
  }

  return(
    <div className='new-container'>
      <div className='new'>
        <div className='new-header'>
          NEW THIS WEEK
        </div>

        <div className='new-content'>
          {mapContent()}
        </div>
      </div>
    </div>
  )
}

export default NewSection;
