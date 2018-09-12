import React from 'react'
import './../../css/unlimited.css'

const UnlimitedSmall = (props) => {
  return(
    <div className='unlimited-container'>
      <div className='unlimited-small'>
        <div className='unlimited-small-content'>
          <img src='https://i.imgur.com/bkKdKZp.png' width='310' height='60' />
          <div><p>MARVEL UNLIMITED</p></div>
          <div><p>Unlock the Marvel Universe</p></div>
          <div><p>Learn More</p></div>
        </div>

        <div className='unlimited-small-footer'>
          <p>
            Auto-renewal and other terms apply.
            See marvel.com/unlimited for additional details.
          </p>
        </div>
      </div>
    </div>
  )
}

export default UnlimitedSmall;
