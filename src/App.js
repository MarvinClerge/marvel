import React, { Component } from 'react';

import NavBar from './components/navbar/NavBar'
import Header from './components/header/Header'
import LargeSection from './components/section/LargeSection'
import SmallSection from './components/section/SmallSection'
import OmegaSection from './components/section/OmegaSection'

import {
  largeSectionContent,
  smallSectionContent,
  omegaSectionContent
} from './components/section/sectionData'

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Header />

        <SmallSection {...smallSectionContent} />
        <OmegaSection {...omegaSectionContent} />
        <LargeSection {...largeSectionContent} />
      </div>
    );
  }
}

export default App;
