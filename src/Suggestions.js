import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import SupervisorAccount from 'material-ui-icons/SupervisorAccount';
import './App.css';

const style = {
    height: '320px',
    width: '280px',
    marginTop: '-235px',
    marginBottom: '30px',
    marginRight: '0px',
    marginLeft: '0px',
    float: 'right',
    clear: 'right',
    display: 'block',
  };

  const avatarstyle = {
    display: 'inline'
   
  }

  const followstyle= {
    borderRadius: '25px',
    border: '1px solid #039BE5',
    width: '25px',
    height:'30px',
    textAlign: 'center',
    lineHeight:'16px',
  }

  const divfollow = {
    marginLeft: '65px',
    marginTop: '-20px',
    cursor: 'pointer',
    color: '#81D4FA'
    
  }

  const tweetstyle = {
    color: '#039BE5',
    fontSize: '12px',
    fontWeight: 'bold',
    fontFamily: 'helvetica',
    textTransform:'none',
    textAlign:'centre',
    lineHeight:'16px',
    verticalAlign: 'middle'

  }

  const iconStyles = {
    display:'inline-block',
    stroke:'#41B2DB',
    strokeWidth:'1.4',
    fill:'transparent',
    verticalAlign:'middle',
    paddingLeft:'12px',
    cursor:'pointer'
    }
 

  const SuggestionBox= () => (
    <div>
    <Paper style={style} zDepth={3} >
    <p className="followerheading"> Who to follow  <span className="heading1">Refresh </span><span className="heading2">   View all</span></p>
    <div className="followcontainer"> 
    <Avatar src="Paulo.ico" size={50}/> 
    <p className="headerstyle">Paulo Coelho <span className="handlestyle"> @paulo</span></p> 
    </div>
    <div style={divfollow}>
            <FlatButton label="Follow"  labelPosition="before" labelStyle={tweetstyle} style={followstyle} disableTouchRipple='false' hoverColor="white" />
        </div>
        <hr />
        <div className="followcontainer"> 
    <Avatar src="ARR.ico" size={50}/> 
    <p className="headerstyle">A.R.Rahman <span className="handlestyle"> @arrahman</span></p> 
    </div>
    <div style={divfollow}>
            <FlatButton label="Follow"  labelPosition="before" labelStyle={tweetstyle} style={followstyle} disableTouchRipple='false' hoverColor="white" />
        </div>
        <hr />
        <div className="followcontainer"> 
    <Avatar src="Opra.ico" size={50}/> 
    <p className="headerstyle">Oprah Winfrey<span className="handlestyle"> @oprah</span></p> 
    </div>
    <div style={divfollow}>
            <FlatButton label="Follow"  labelPosition="before" labelStyle={tweetstyle} style={followstyle} disableTouchRipple='false' hoverColor="white" />
        </div>
        <hr />
    <div style={{paddingTop:'0px',position:'relative'}}>
    <p> <SupervisorAccount style={iconStyles}/><span className="findpeople"> Find people you know</span></p>
    </div>
    </Paper>
  </div>
  );
  
  export default SuggestionBox;