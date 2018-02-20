import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './images/Banner.png'

var sectionStyle = {
  width: "100%",
  height: "100px",
  backgroundImage: `url(${Header})`
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={ sectionStyle } className="App-header">
          <h1 className="App-title">Jaida Grey Eagle</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
