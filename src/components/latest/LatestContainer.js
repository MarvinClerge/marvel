import React from 'react'
import Latest from './Latest'
import HypeBox from './HypeBox'

import { latestData } from './latestData'
import { hypeboxData } from './hypeboxData'
import './../../css/latest.css'

const LatestContainer = (props) => {

  return(
    <div className='latest-outer-container'>
      <div className='latest-inner-container'>
        <Latest content={latestData} />
        <HypeBox content={hypeboxData} />
      </div>
    </div>
  )
}

export default LatestContainer;
