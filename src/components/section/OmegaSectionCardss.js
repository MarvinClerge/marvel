import React from 'react'

const OmegaSectionCards = (props) => {

  const mapCards = () => {
    return props.cards.map((item, index) => {
      return(
        <div key={index} className='omega-section-card'>
          <div className='omega-section-card-image'>
            <img src={item.image} />
          </div>

          <p>{item.category}</p>
          <p>{item.title}</p>
        </div>
      )
    })
  }

  return(
    <div className='omega-section-cards-container'>
      <div className='omega-section-cards'>
        {mapCards()}
      </div>
    </div>
  )
}

export default OmegaSectionCards;
