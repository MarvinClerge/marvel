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
      title: "Get Your First Look at Marvel Studios' 'Captain Marvel'",
      description: "Pick up your copy of Entertainment Weekly on newsstands this Friday!",
      timeAgo: "1 DAY AGO"
    }, {
      category: "COMICS",
      title: "Captain Marvel Essential Reading",
      timeAgo: "5 MONTHS AGO"
    }, {
      category: "MOVIES",
      title: "Production Underway on Marvel Studios’ ‘Captain Marvel’",
      timeAgo: "5 MONTHS AGO"
    }, {
      category: "CULTURE & LIFESTYLE",
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
