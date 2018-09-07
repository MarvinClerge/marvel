import React from 'react'
import OmegaSectionHeader from './OmegaSectionHeader'
import OmegaSectionCards from './OmegaSectionCardss'

const OmegaSection = (props) => {

  return(
    <div className='omega-section'>
      <OmegaSectionHeader {...props} />
      <OmegaSectionCards cards={props.cards} />
    </div>
  )
}

export default OmegaSection;
