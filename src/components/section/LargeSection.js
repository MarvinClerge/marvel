import React from 'react'
import './../../css/section.css'

const LargeSection = (props) => {

  const mapContent = () => {
    return props.content.slice(1).map((item, index) => {
      return(
        <div key={index} className='large-section-item'>
          <div className='large-section-image-container'>
            <img src={item.image} />
          </div>

          <p className='large-section-text'>
            {item.category}
          </p>

          <p className='large-section-s-title'>
            {item.title}
          </p>

          <p className='large-section-text'>
            {item.timeAgo}
          </p>
        </div>
      )
    })
  }

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
            <p className='large-section-text'>
              {main.category}
            </p>
            <p className='large-section-title'>
              {main.title}
            </p>
            <p className='large-section-text'>
              {main.description}
            </p>
            <p className='large-section-text'>
              {main.timeAgo}
            </p>
          </div>
        </div>

        <div className='large-section-items'>
          {mapContent()}
        </div>

      </div>
    </div>
  )
}

export default LargeSection;
