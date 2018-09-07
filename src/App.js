import React, { Component } from 'react';

import NavBar from './components/navbar/NavBar'
import Header from './components/header/Header'
import LargeSection from './components/section/LargeSection'
import SmallSection from './components/section/SmallSection'

import {
  largeSectionContent,
  smallSectionContent
} from './components/section/sectionData'

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Header />
        <LargeSection {...largeSectionContent} />
        <SmallSection {...smallSectionContent} />
      </div>
    );
  }
}

export default App;
