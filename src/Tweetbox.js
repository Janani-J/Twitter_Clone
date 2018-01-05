import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import InsertPhoto from 'material-ui-icons/InsertPhoto';
import './App.css';

const style = {
    height: '50px',
    marginTop: '-50px',
    marginLeft: '300px',
    marginRight: '300px',
    borderColor: 'black',
    marginBottom: '0px',
    backgroundColor: '#ECF7FB'
  };
  
  const iconstyle = {
    margin:'0px',
    marginLeft: '20px',
    paddingRight: '0px',
    marginTop: '10px'
  }
  
  const tweetcontainer = {
    marginTop: '4px',
    display: 'flex',
  }
  
  const textbox = {
    backgroundColor: 'white',
    display: 'flex',
    borderRadius: '8px',
    border:'0.5px solid #41B2DB',
    borderShadow:'none',
    paddingLeft: '2px',
    marginLeft: '10px',
    marginTop: '8px',
    height: '35px',
    width: '500px'
  }

  const Textfieldstyle = {
    borderRadius: '5px',
    height: '35px',
    width: '80%',
    paddingLeft: '10px',
    marginTop: '2px',
    display: 'inline-block',
    color:'#41B2DB',
    fontSize:'14px'
  
  }
  
  const img = {
    marginLeft: '100px',
    marginRight: '10px',
    marginTop: '6px',
    stroke:'#41B2DB',
    strokeWidth:'1.2',
    fill:'transparent',
    display:'inline-block',
    verticalAlign:'middle'
  }
  const TweetBox = () => (
    <div>
      <Paper style={style} zDepth={3} >
        <div style={{marginTop:'4px',display:'flex'}}>
          <Avatar
            src="janani.ico"
            size={30}
            style={iconstyle}
          />
          <div style={textbox}>
            <TextField placeholder="What's happening?" style={Textfieldstyle} underlineShow={false}>  
            </TextField>
            <InsertPhoto style={img}/>
          </div>
       </div>
      </Paper>
    </div>
  );

export default TweetBox;