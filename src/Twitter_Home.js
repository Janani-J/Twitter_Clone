import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TrendsBox from './Trends.js';
import ProfileArea from './Profile.js';
import Headertoolbar from './Toolbar.js';
import SuggestionBox from './Suggestions';
import TwitterInfo from './Extras';
import TweetBox from './Tweetbox';
import ShowPosts from './Posts';

class TwitterHome extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div style={{backgroundColor:"#e6ecf0"}}>
      <Headertoolbar />
        <div id="Maincontainer">
        <ProfileArea />
        <TrendsBox />
        <SuggestionBox />
        <TwitterInfo/>
        <TweetBox />
        <ShowPosts/>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}
export default TwitterHome;
