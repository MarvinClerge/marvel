import React, { Component } from 'react';

import NavBar from './components/navbar/NavBar'
import Header from './components/header/Header'

import LargeSection from './components/section/LargeSection'
import SmallSection from './components/section/SmallSection'
import OmegaSection from './components/section/OmegaSection'

import LatestContainer from './components/latest/LatestContainer'
import Featured from './components/featured/Featured'

import UnlimitedSmall from './components/unlimited/UnlimitedSmall'


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

        <LatestContainer />

        <Featured />

        <UnlimitedSmall />
      </div>
    );
  }
}

export default App;
