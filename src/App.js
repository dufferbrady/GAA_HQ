import React, { Component } from 'react';

import Header from './Components/Header/Header'
import Featured from './Components/Featured/Featured'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured />
      </div>
    );
  }
}

export default App;
