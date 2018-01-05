import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TwitterHome from './Twitter_Home';
import TwitterSearch from './Twitter_Search';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <TwitterHome/>
      </MuiThemeProvider>
    );
  }
}

export default App;
