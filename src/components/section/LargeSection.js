import React from 'react'
import './../../css/section.css'

const LargeSection = (props) => {

  const main = props.content[0]

  return(
    <div className='large-section-container'>
      <div className='large-section'>

        <p className='large-section-title'>
          {props.title}
        </p>

        <div className='large-section-main'>
          <div className='large-section-main-image'>
            <img src={main.image} />
          </div>

          <div className='large-section-main-content'>
            <p className='large-section-content-text'>
              {main.category}
            </p>
            <p className='large-section-content-title'>
              {main.title}
            </p>
            <p className='large-section-content-text'>
              {main.description}
            </p>
            <p className='large-section-content-text'>
              {main.timeAgo}
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LargeSection;
