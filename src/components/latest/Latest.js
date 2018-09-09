import React from 'react'

const Latest = (props) => {

  const mapContent = () => {
    return props.content.map((item, index) => {
      return(
        <div key={index} className='latest-item'>
          <div className='latest-card-image'>
            <img src={item.image} />
          </div>

          <div className='latest-card-content'>
            <p className='latest-card-text'>{item.category}</p>
            <p className='latest-card-title'>{item.title}</p>
            <p className='latest-card-text'>{item.timeAgo}</p>
          </div>
        </div>
      )
    })
  }

  return(
    <div className='latest'>
      <p>LATEST</p>
      {mapContent()}
    </div>
  )
}

export default Latest;
