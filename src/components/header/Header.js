import React, { Component } from 'react'
import HeaderContent from './HeaderContent'
import HeaderControls from './HeaderControls'

const content = [
  {
    backgroundImage: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avnbpquest_com_mas_dsk_01.jpg",
    category: "MARVEL'S AVENGERS: BLACK PANTHER'S QUEST" ,
    title: "WATCH THE TRAILER FOR THE NEW SEASON",
    description: "The Black Panther begins new adventures on Sunday, September 23 at 9:00PM ET/PT on Disney XD!"
  }, {
    backgroundImage: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/topfemaleduos_com_mas_dsk_01.jpg",
    category: "MARVEL TOP TEN",
    title: "TOP 10 FEMALE DUOS",
    description: "From badass besties to super sisters, check out these top team-ups."
  }, {
    backgroundImage: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironfist_com_mas_dsk_01.jpg",
    category: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironfist_lob_log_01_1.png",
    title: "SEASON 2 PRIMER",
    description: "Get a refresher on Danny Rand and all his friends and foes before the new season premieres this Friday on Netflix!"
  }, {
    backgroundImage: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainmarvelmag_com_mas_dsk_01.jpg",
    category: "Marvel Studios",
    title: "Get Your First Look at Captain Marvel",
    description: "Entertainment Weekly has your exclusive first look at the badass hero."
  }, {
    backgroundImage: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spidermanps4_com_mas_dsk_01.jpg",
    category: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spiderman.png",
    title: "The Reviews Are In",
    description: "Here’s what top critics are saying about \"Marvel’s Spider-Man\" for PS4 (don’t worry, we’ll keep it spoiler-free)!"
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
        <HeaderControls content={content} activeContent={this.state.activeContent} changeActive={this.changeActive} />
      </div>
    )
  }

}

export default Header;
