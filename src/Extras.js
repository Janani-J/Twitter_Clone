import React from 'react';
import Paper from 'material-ui/Paper';
import OpenInNew from 'material-ui-icons/OpenInNew';
import './App.css';

const style = {
    height: '150px',
    width: '280px',
    marginTop: '10px',
    marginBottom: '10px',
    marginRight: '0px',
    marginLeft: '5px',
    padding: '12px',
    fontFamily: 'Helvetica',
    fontSize: '12px',
    color: '#657786',
    float: 'right',
    clear: 'right',
    lineHeight: '18px',
    fontWeight:'normal'
  };

  const iconStyles = {
    display:'inline-block',
    stroke:'#41B2DB',
    strokeWidth:'0.8',
    fill:'transparent',
    verticalAlign:'middle',
    paddingLeft:'12px',
    cursor:'pointer'
    }

    const TwitterInfo= () => (
        <div>
        <Paper style={style} zDepth={3} >
        <div>
            <p> &copy; 2018 Twitter <a>About</a>   <a>Help Center</a> <a>Terms</a> <a>Privacy policy</a>  <a>Cookies</a> <a>Ads info</a>    <a>Brand</a>   <a>Blog</a>    <a>Status</a>  <a>Apps</a>    <a>Jobs</a>    <a>Marketing</a>   <a>Businesses</a>  <a>Developers</a> </p>          
        </div>
        <hr />
        <div style={{paddingTop:'0px',position:'relative'}}>
    <p> <OpenInNew style={iconStyles}/><span className="findpeople">Advertise with Twitter</span></p>
    </div>
        </Paper>
        </div>
    );
    export default TwitterInfo;