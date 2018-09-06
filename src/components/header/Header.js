import React, { Component } from 'react'
import HeaderContent from './HeaderContent'
import HeaderControls from './HeaderControls'

const content = [
  {
    backgroundImage: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avnbpquest_com_mas_dsk_01.jpg",
    category: "Marvel's Avengers: Black Panther's Quest",
    title: "Watch the Trailer for the New Season",
    description: "The Black Panther begins new adventures on Sunday, September 23 at 9:00PM ET/PT on Disney XD!"
  }, {
    backgroundImage: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/topfemaleduos_com_mas_dsk_01.jpg",
    category: "Marvel Top Ten",
    title: "Top 10 Female Duos",
    description: "From badass besties to super sisters, check out these top team-ups."
  }, {
    backgroundImage: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironfist_com_mas_dsk_01.jpg",
    category: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironfist_lob_log_01_1.png",
    title: "Season 2 Primer",
    description: "Get a refresher on Danny Rand and all his friends and foes before the new season premieres this Friday on Netflix!"
  }
]

// backgroundImage: "",
// category: "",
// title: "",
// description: ""

class Header extends Component {
  state = {
    activeContent: 0
  }

  changeActive = (index) => {
    this.setState({
      activeContent: index
    })
  }

  render(){
    return(
      <div className='header'>
        <HeaderContent content={content[this.state.activeContent]} />
        <HeaderControls content={content} changeActive={this.changeActive} />
      </div>
    )
  }

}

export default Header;
