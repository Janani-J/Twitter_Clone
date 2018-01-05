import React from 'react';
import Paper from 'material-ui/Paper';
import './App.css';

const style = {
    height: '350px',
    width: '280px',
    marginTop: '10px',
    marginBottom: '20px',
    marginLeft:'1px',
    marginRight:'10px',
    spacing:'20px',
    float:'left',
    clear: 'left'
  };
  const TrendsBox = () => (
    <div>
      <Paper style={style} zDepth={3}>
        <div id="trends">
         <p style={{fontSize: '18px',fontFamily: 'helvetica',color:'#14171a',fontWeight: 'bold',paddingLeft: '12px',paddingTop: '12px',textAlign:'Left'}}>
         Trends for You<span class="heading1" style={{paddingLeft:'18px'}}>Change</span></p>
         <ul>
             <li>
              <div>
              <p className="trend">#CycloneOchki</p>
              <p className="counts">2k Tweets</p>
              </div>
               </li>
               <li>
              <div>
              <p className="trend">#Baloon</p>
              <p className="counts">900k Tweets</p>
              </div>
               </li>
               <li>
              <div>
              <p className="trend">#PuneFashionWeek</p>
              <p className="counts">106k Tweets</p>
              </div>
               </li>
               <li>
              <div>
              <p className="trend">#LetsWindMill</p>
              <p className="counts">200k Tweets</p>
              </div>
               </li>
               <li>
              <div>
              <p className="trend">#2017 Memories</p>
              <p className="counts">10k Tweets</p>
              </div>
               </li>
               <li>
              <div>
              <p className="trend">#Piyush Goyal</p>
              <p className="counts">8k Tweets</p>
              </div>
               </li>

             </ul>
      </div>
      </Paper>
      </div>
  );
  
  export default TrendsBox;