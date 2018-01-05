import React,{Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {Tabs, Tab} from 'material-ui/Tabs';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import Home from 'material-ui-icons/Home';
import FlashOn from 'material-ui-icons/FlashOn';
import NotificationsNone from 'material-ui-icons/NotificationsNone';
import MailOutline from 'material-ui-icons/MailOutline';
import Search from 'material-ui-icons/Search';
import RaisedButton from 'material-ui/RaisedButton';
import {lightBlue200} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import './App.css';

const toolbarstyle={
backgroundColor:'White',
height:'48px'
}

const tabstyles = {
    width: '70%',
    height: '30px',
    fontWeight:'bold',
    color:'#616161',
    fontfamily: 'helvetica',
    display: 'inline-block',
}

const labelstyle={
  color:'#616161',
  fontWeight: 'bold',
  fontFamily: 'helvetica',
  fontSize: '16px',
  textTransform:'none',
  display:'inline-block',
  

}
const iconstyle = {
  stroke:'#616161',
  strokeWidth:'1.2',
  fill:'transparent',
  display:'inline-block',
  verticalAlign: 'middle'
  
}

const textbox = {
  backgroundColor: '#e6ecf0',
  display: 'inline-block',
  border:'0.50px solid #66757f',
  borderShadow:'none',
  marginTop: '5px',
  borderRadius: '25px',
  width: '200px',
  marginLeft: '50px',
  height: '36px',
  marginBottom: '2px',
  verticalAlign:'center',
}

const Textfieldstyle = {
  borderRadius: '25px',
  marginTop: '2px',
  display: 'inline-block',
  color:'#66757f',
  fontSize:'12px',
  verticalAlign:'middle',
  marginLeft: '20px',
  width: '200px',
  marginBottom: '20px',
  height: '36px'

}
const searchstyle={
marginRight: '0px',
stroke:'#66757f',
strokeWidth:'0.5',
fill:'transparent',
display:'inline-block',
verticalAlign:'middle',
marginBottom: '20px',
marginLeft:'160px',
marginTop:'-75px'

}

const raisedbuttonstyle = {
  borderRadius: '25px',
  width: '100px',
  height:'30px',
  textAlign: 'center',
  lineHeight:'25px',
  backgroundColor:'#29B6F6',
}

const tweetstyle ={
  color: 'White',
  fontSize: '14px',
  fontWeight: 'bold',
  fontFamily: 'helvetica',
  textTransform:'none',
  textAlign:'centre',
  lineHeight:'25px',
  verticalAlign: 'middle',
};

    export default class Headertoolbar extends React.Component {   
      render() {
        return (
          <div>
      <Paper style={toolbarstyle} zDepth={1} >
     <Toolbar style={toolbarstyle} >
      <ToolbarGroup firstChild={true}style={{width:'75%', paddingLeft:'75px'}}>

        <Tabs  inkBarStyle={{backgroundColor:"#616161",width:'25%', marginLeft:'0px'}}>
        
          <Tab style={{backgroundColor:'White'}} icon={<FlatButton style={{marginTop:'15px',marginLeft:'0px',paddingLeft:'-5px',verticalAlign: 'middle',display:'inline-block'}}
           icon={<Home style={iconstyle}/>} label="Home" labelStyle={labelstyle}/>}/>
        
          <Tab style={{backgroundColor:'White'}} icon={ <FlatButton style={{marginTop:'15px',paddingLeft:'-5px',verticalAlign: 'middle',display:'inline-block'}}
           icon={<FlashOn style={iconstyle}/>} label="Moments"  labelStyle={labelstyle}/>}/>
          
          <Tab style={{backgroundColor:'White'}}  icon={<FlatButton style={{marginTop:'15px',marginLeft:'0px',paddingLeft:'-5px',verticalAlign: 'middle',display:'inline-block'}}
           icon={<NotificationsNone style={iconstyle}/>} label="Notifications"  labelStyle={labelstyle}/>}/>
          
          <Tab style={{backgroundColor:'White'}} icon={<FlatButton style={{marginTop:'15px',marginLeft:'0px',paddingLeft:'-5px',verticalAlign: 'middle',display:'inline-block'}}
           icon={<MailOutline style={iconstyle}/>} label="Messages"  labelStyle={labelstyle}/>}/>
        
        </Tabs>
      </ToolbarGroup>
      <ToolbarGroup firstChild={false} style={{paddingRight:'110px'}}>
         <Avatar src="twitter_icon.ico" size={30} style={{backgroundColor:'transparent',lineHeight:'30px'}} />
         </ToolbarGroup>
         <ToolbarGroup lastChild={false} style={{marginLeft:'0px',paddingRight:'25px',paddingLeft:'-5px'}}>
         <div style={textbox}>
  <TextField placeholder="Search Twitter" style={Textfieldstyle} underlineShow={false} hasIcon={true} >  
            </TextField>
           <Search style={searchstyle}/>
          </div>
           </ToolbarGroup>
           <ToolbarGroup lastChild={false} style={{paddingRight:'0px',paddingLeft:'0px'}}>
           <Avatar src="janani.ico" size={35} style={{backgroundColor:'transparent',lineHeight:'30px'}} />
           </ToolbarGroup>
         <ToolbarGroup lastChild={true} style={{paddingLeft:'15px',paddingRight:'75px',backgroundColor:'transparent'}}>
         <div>
         <RaisedButton  label="Tweet" labelStyle={tweetstyle} buttonStyle={raisedbuttonstyle}  style={{ borderRadius: '25px' }}disableTouchRipple='false' />
         </div>
         </ToolbarGroup>
         </Toolbar>
         </Paper>
         </div>
         );
    }
  }