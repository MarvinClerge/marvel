import React from 'react'
import './../../css/hypebox.css'

const HypeBox = (props) => {
  console.log(props);

  const mapContent = () => {
    return props.content.map((item, index) => {
      return(
        <div className='hypebox-card'>
          <div className='hypebox-card-image'>
            <img src={item.image} />
          </div>
          <div className='hypebox-card-content'>
            <p>{item.category}</p>
            <p className='hypebox-card-title'>{item.title}</p>
          </div>
        </div>
      )
    })
  }

  return(
    <div className='hypebox'>
      <div className='hypebox-header'>
        <p className='hypebox-title'>
          THE HYPE BOX
        </p>
        <p className='hypebox-text'>
          Can’t-miss news and updates from across the Marvel Universe!
        </p>
      </div>

      <div className='hypebox-cards'>
        {mapContent()}
      </div>
    </div>
  )
}

export default HypeBox;
