import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TrendsBox from './Trends.js';
import ProfileArea from './Profile.js';
import Headertoolbar from './Toolbar.js';
import SuggestionBox from './Suggestions';
import TwitterInfo from './Extras';
import TweetBox from './Tweetbox';
import ShowPosts from './Posts';
import SearchPage from './SearchPage';

class TwitterSearch extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div style={{backgroundColor:"#e6ecf0"}}>
      <Headertoolbar />
        <div id="Maincontainer">
        <SearchPage />
        <div style={{marginTop:'0px',marginBottom:'5px',float:'Left',free:'right',marginLeft:'0px'}}>
        <SuggestionBox />
        </div>
        <div style={{marginTop:'-100px',marginLeft:'0px',marginBottom:'5px'}}>
        <TrendsBox />
        </div>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default TwitterSearch;
