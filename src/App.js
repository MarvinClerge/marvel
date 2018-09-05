import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar'
import Header from './components/header/Header'

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Header />
      </div>
    );
  }
}

export default App;
