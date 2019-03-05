import React, { Component } from 'react';

import Header from './Components/Header/Header'
import Featured from './Components/Featured/Featured'
import FinalNfo from './Components/FinalNfo/FinalNfo'
import Highlights from './Components/Highlights/Highlights'
import Pricing from './Containers/Pricing/Pricing'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured />
        <FinalNfo />
        <Highlights />
        <Pricing />
      </div>
    );
  }
}

export default App;
