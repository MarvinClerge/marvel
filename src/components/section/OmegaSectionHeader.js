import React from 'react'

const OmegaSectionHeader = (props) => {
  const backgroundStyle = {
    backgroundImage: 'url(' + props.backgroundImage + ')'
  }

  const renderCategory = () => {
    if (props.category.includes('http')) {
      return(
        <div className='omega-image-container'>
          <img src={props.category} />
        </div>
      )
    } else {
      return(
        <p>
          {props.category}
        </p>
      )
    }
  }

  const renderButtons = () => {
    return props.buttons.map((item, index) => {
      return(
        <button key={index} className='section-button'>
          <a href={item.link}>
            {item.name}
          </a>
        </button>
      )
    })
  }

  return(
    <div
      className='omega-section-header-container'
      style={backgroundStyle}
    >
      <div className='omega-section-header'>
        {renderCategory()}

        <p>
          {props.description}
        </p>

        <div>
          {renderButtons()}
        </div>
      </div>
    </div>
  )
}

export default OmegaSectionHeader;
