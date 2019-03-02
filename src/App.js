import React, { Component } from 'react';

import Header from './Components/Header/Header'
import Featured from './Components/Featured/Featured'
import FinalNfo from './Components/FinalNfo/FinalNfo'
import Highlights from './Components/Highlights/Highlights'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured />
        <FinalNfo />
        <Highlights />
      </div>
    );
  }
}

export default App;
