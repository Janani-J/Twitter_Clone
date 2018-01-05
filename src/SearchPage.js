import React from 'react';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import Avatar from 'material-ui/Avatar';
import './App.css';

const style1={
    marginTop:'12px', 
    marginLeft:'1px', 
    height: 50, 
    width:280,
    display: 'inline-block'
}

const style2 = {
    height: '200px',
    width: '280px',
    marginTop: '15px',
    marginBottom: '5px',
    marginLeft:'1px',
    marginRight:'10px',
    spacing:'25px',
    float:'left'
  }

  const listStyle={
    wordWrap:'break-word',
    paddingBottom:'8px',
    paddingLeft:'2px'
  }

  const tabStyle={
    textTransform: 'none',
    color:'#616161',
    backgroundColor:'White',
    fontWeight:'bold',
    cursor:'pointer'
    
  }

  const paperstyle={
    margin:   {marginTop: 15,  marginLeft:20},
    search:   {fontSize:18, color:"Black" },
    show:     {fontSize:14, color:"#29B6F6",fontWeight:'Normal',paddingLeft:'5px'},
  }
 
  const style3={
    marginTop:'-50px',  
    display: 'inline-block',
    height: '200px',
    width: '280px',
    marginBottom:'5px',
    marginRight:'1px',
    spacing:'25px',
    float:'right',
  
  };

  const style4={
    marginTop:'-8px',  
    display: 'inline-block',
    height: '150px',
    width: '610px',
    marginBottom:'5px',
    marginRight:'1px',
    marginLeft:'2px'
  
  };

  const style = {
    height: '230px',
    width: '280px',
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft:'310px',
    marginRight:'10px',
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

  const SearchPage = () => (
    <div>
     <div style={{backgroundColor:'#29B6F6', height:'60px', marginTop:'-72px',marginLeft:'-75px',paddingRight:'0px',width:'112.5%'}}>
     <br />
       <h2 style={{marginLeft:90, marginTop:0, color:'White'}}>aadhaar</h2>
     </div>
     <div >
     <Tabs style={{width:'125%',marginLeft:'-75px',backgroundColor:'White',color:'White'}} initialSelectedIndex={1} inkBarStyle={{backgroundColor:"#616161"}} >
                        <Tab style={tabStyle} disabled={true} />
                        <Tab style={tabStyle} label='Top' />
                        <Tab style={tabStyle} label= "Latest" />
                        <Tab style={tabStyle} label="People" />
                        <Tab  style={tabStyle}label="Photos" />
                        <Tab  style={tabStyle}label="Videos" />
                        <Tab style={tabStyle} label="News" />
                        <Tab style={tabStyle} label="Broadcasts" />
                        <Tab style={tabStyle} disabled={true} /><Tab style={tabStyle} disabled={true} /><Tab style={tabStyle} disabled={true} />
                        <Tab style={tabStyle} disabled={true} /><Tab style={tabStyle} disabled={true} /><Tab style={tabStyle} disabled={true} />
                        <Tab style={tabStyle} disabled={true} /><Tab style={tabStyle} disabled={true} /><Tab style={tabStyle} disabled={true} />
                    </Tabs>
    </div>

   < div>
                        <Paper style={style1} zDepth={3}>
                            <div style={paperstyle.margin}>
                                <b style={paperstyle.search}>Search filters </b>  
                                <span style={paperstyle.show}>Show</span>
                            </div>
                            </Paper>
                            </div>
      <Paper style={style2} zDepth={3}>
        <div>
         <p style={{fontSize: '18px',lineHeight:'22px',fontFamily: 'helvetica',color:'#14171a',fontWeight: 'bold',paddingLeft: '10px',paddingTop: '5px',textAlign:'Left'}}>
         Related Searches</p>
         <ul style={{paddingTop:'-2px',paddingLeft: '15px',paddingBottom:'2px',textAlign:'Left',listStyleType:'none'}}>
             <li><p className="trend" style={listStyle}>Axis Bank</p></li>
             <li><p className="trend"style={listStyle}>Aadhaar Link</p></li>
             <li><p className="trend"style={listStyle}>Rahul Dravid</p></li>
             <li><p className="trend"style={listStyle}>Mobile Number</p></li>
             <li><p className="trend"style={listStyle}>Narendra Modi</p></li>
         </ul>
      </div>
      </Paper>
      <div>
          <Paper style={style3} zDepth={3}>
          <div style={paperstyle.margin}>
          <b style={paperstyle.search}>Related articles </b>  
        <span style={paperstyle.show}> View all</span>
        <p style={{fontFamily: 'helvetica',color:'#14171a',display:'block',lineHeight:'18px',fontWeight: 'bold',fontSize:'14px',wordWrap:'break-word',cursor:'pointer'}}>Your Aadhaar number on sale for Rs 500, all Aadhaar-linked details of 1…</p>
        <p style={{fontFamily: 'helvetica',color:'#66757f',display:'block',lineHeight:'18px',fontWeight: 'normal',fontSize:'12px',wordWrap:'break-word',cursor:'pointer'}}>  An investigation has revealed that sellers on WhatsApp are providing unrestricted access…</p>
        <p style={{fontFamily: 'helvetica',paddingTop:'10px',textAlign:'left',color:'#14171a',lineHeight:'14px',fontWeight: 'bold',fontSize:'12px',cursor:'pointer'}}>IndiaTodayTech <span style={{fontFamily: 'helvetica',textAlign:'right',color:'#66757f',cursor:'pointer',fontWeight:'normal',paddingLeft:'75px'}}> Jan 01,2018</span></p>
        </div>
        </Paper>
          </div>
          <div>
          <p style={{marginLeft:'300px',display:'block',fontWeight:'bold',marginTop:'-45px',align:'center',position:'relative',fontFamily:'helvetica',color:'#14171a'}}>Top News<span style={{fontSize:12, color:"#29B6F6",fontWeight:'Normal',textAlign:'Right',marginLeft:'480px'}}>View all</span></p>
          </div>
          <div>
          <Paper style={style4} zDepth={3}>
          <div style={paperstyle.margin}>
        <p style={{fontFamily: 'helvetica',color:'#14171a',display:'block',lineHeight:'18px',fontWeight: 'bold',fontSize:'18px',wordWrap:'break-word',cursor:'pointer'}}>UIDAI says Tribune story ‘misreporting’, read how that is wrong</p>
        <p style={{fontFamily: 'helvetica',color:'#66757f',display:'block',lineHeight:'18px',fontWeight: 'normal',fontSize:'14px',wordWrap:'break-word',cursor:'pointer'}}>CHANDIGARH: Responding to The Tribune exclusive story revealing how UIDAI data on Aadhaar holders is being accessed unauthorisedly, the Unique Identification Authority…</p>
        <p style={{fontFamily: 'helvetica',paddingTop:'12px',textAlign:'left',color:'#14171a',lineHeight:'16px',fontWeight: 'bold',fontSize:'14px',cursor:'pointer'}}>The Tribune <span style={{lineHeight:'0px',fontFamily: 'helvetica',color:'#66757f',cursor:'pointer',paddingTop:'0px',fontWeight:'normal',textAlign:'right',paddingLeft:'400px'}}>Jan 01,2018</span></p>
        </div>
        </Paper>
        <div>
          <Paper style={{marginTop:'10px',display: 'inline-block',height: '40px',width: '610px',marginBottom:'5px',marginRight:'1px',marginLeft:'2px'}}>
         <p style={{textAlign:'center',fontFamily: 'helvetica',fontWeight: 'normal',color:"#29B6F6",fontSize:'12px'}}>72 new Results</p>
          </Paper>
          </div>
          <div>
          <p style={{marginLeft:'300px',display:'block',fontWeight:'bold',marginTop:'10px',align:'center',position:'relative',fontFamily:'helvetica',color:'#14171a',fontSize:'18px'}}>People<span style={{fontSize:12, color:"#29B6F6",fontWeight:'Normal',textAlign:'Right',marginLeft:'500px'}}>View all</span></p>
          </div>
          <div>
          <Paper style={style} zDepth={3} >
        <div className="container">    
        <div>
        <img src="Aadhar_cover.jpg" className="coverstyle" style={{width:'100%'}}/>
        <Avatar src="Aadhar.jpg" size={50} style={avatarstyle} />
        </div>
          <p className="namestyle"> Aadhaar <br /> 
          </p>
           <p className="tagstyle"> @UIDAI </p>  

        <div className="profiledetails">
          <div>
            <p style={{fontFamily: 'helvetica',fontSize:'14px',fontWeight: 'normal',color:'Black',paddingLeft:'20px',paddingTop:'5px',lineHeight:'20px',wordWrap:'break-word'}}>Official Twitter account of the Unique Identification Authority of India. RTs are not endorsements.Tweets</p>
          </div>
          </div>
     </div>
    </Paper>
    <Paper style={{ height: '230px',width: '280px',marginTop: '0px', marginBottom: '20px',
    marginLeft:'610px',marginRight:'20px',marginTop:'-250px'}} zDepth={3} >
        <div className="container">    
        <div>
        <img src="Aadhar_cover.jpg" className="coverstyle" style={{width:'100%'}}/>
        <Avatar src="Aadhar.jpg" size={50} style={avatarstyle} />
        </div>
          <p className="namestyle"> Aadhaar <br /> 
          </p>
           <p className="tagstyle"> @UIDAI </p>  

        <div className="profiledetails">
          <div>
            <p style={{fontFamily: 'helvetica',fontSize:'14px',fontWeight: 'normal',color:'Black',paddingLeft:'20px',paddingTop:'5px',lineHeight:'20px',wordWrap:'break-word'}}>Official Twitter account of the Unique Identification Authority of India. RTs are not endorsements.Tweets</p>
          </div>
          </div>
     </div>
    </Paper>
            </div>
          </div>
      </div>
  );
  
  export default SearchPage;