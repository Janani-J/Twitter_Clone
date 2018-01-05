import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import './App.css';

const style = {
    height: '220px',
    width: '280px',
    marginTop: '-50px',
    marginBottom: '20px',
    marginLeft:'1px',
    marginRight:'10px',
    float:'left',
    paddingTop:'0px',
    clear: 'right'
  };

  const avatarstyle = {
    borderradius: '50%',
    height: '72px',
    width: '72px',
    border: '2px solid #fff',
    boxsizing: 'border-box',
    color: '#fff',
    marginTop:'-30px',
    marginLeft:'7px'
   
  }
  const ProfileArea= () => (
    <div>
    <Paper style={style} zDepth={3} >
        <div className="container">    
        <div>
        <img src="tinker_cover.jpg" className="coverstyle"/>
        <Avatar src="janani.ico" size={50} style={avatarstyle} />
        </div>
          <p className="namestyle"> Janani <br /> 
          </p>
           <p className="tagstyle"> @Janani_J </p>  

        <div className="profiledetails">
          <div>
            <p className="title">Tweets</p>
            <p className="tcount">200</p>
          </div>
          <div>
            <p className="title">Following</p>
            <p className="tcount">100</p>
          </div>
          <div>  
            <p className="title">Followers</p>
            <p className="tcount">50</p>
          </div> 
          </div>
     </div>
    </Paper>
  </div>
  );
  
  export default ProfileArea;