import React, { Component } from 'react'
import { featuredData } from './featuredData'
import './../../css/featured.css'

class Featured extends Component {
  state = {
    activeItem: 0
  }

  mapData = () => {
    return featuredData.map((item, index) => {

      const backgroundStyle = {
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${item.image}')`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
      }

      return(
        <div
          key={index}
          className='featured-item'
          style={backgroundStyle}
          onClick={() => this.changeActive(index)}
        >
          {item.title}
        </div>
      )
    })
  }

  changeActive = (index) => {
    this.setState({
      activeItem: index
    })
  }

  render(){
    let {videoId, title} = featuredData[this.state.activeItem]

    return(
      <div className='featured-container'>
        <div className='featured'>
          <div className='featured-content'>
            <div className='featured-video-container'>
              <iframe width="900px" height="506px"
                src={`https://www.youtube.com/embed/${featuredData[this.state.activeItem].videoID}`}
                frameborder="0" allow="autoplay; encrypted-media"
              allowfullscreen></iframe>
            </div>

            <div className='featured-items'>
              {this.mapData()}
            </div>
          </div>

          <div className='featured-text'>
            <h5>{featuredData[this.state.activeItem].category}</h5>
            <h2>{featuredData[this.state.activeItem].title}</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Featured
