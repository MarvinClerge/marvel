import React, { Component } from 'react';

import NavBar from './components/navbar/NavBar'
import Header from './components/header/Header'
import LargeSection from './components/section/LargeSection'
import SmallSection from './components/section/SmallSection'

const largeSectionContent = {
  title: 'CAPTAIN MARVEL',
  content: [
    {
      category: "MOVIES",
      image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/cm_card.jpg",
      title: "Get Your First Look at Marvel Studios' 'Captain Marvel'",
      description: "Pick up your copy of Entertainment Weekly on newsstands this Friday!",
      timeAgo: "1 DAY AGO"
    }, {
      category: "COMICS",
      image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/cover._sx1280_ql80_ttd__0.jpg",
      title: "Captain Marvel Essential Reading",
      timeAgo: "5 MONTHS AGO"
    }, {
      category: "MOVIES",
      image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/cm_sop_photo_better.jpg",
      title: "Production Underway on Marvel Studios’ ‘Captain Marvel’",
      timeAgo: "5 MONTHS AGO"
    }, {
      category: "CULTURE & LIFESTYLE",
      image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/craft_card.jpg",
      title: "Show Off Your Super Fandom Like Kamala Khan with This DIY Captain Marvel Notebook",
      timeAgo: "1 WEEK AGO"
    }
  ]
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Header />
        <LargeSection {...largeSectionContent}/>
      </div>
    );
  }
}

export default App;
