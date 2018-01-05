import React from 'react';
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Message from 'material-ui-icons/Message';
import Repeat from 'material-ui-icons/Repeat';
import Favorite from 'material-ui-icons/Favorite';
import FavoriteBorder from 'material-ui-icons/FavoriteBorder';
import MailOutline from 'material-ui-icons/MailOutline';

const postStyle={
    card:   {backgroundColor:'White', width:'600px',marginLeft:'300px',marginRight:'300px',height:'650px',paddingTop:'5px'},
    name:   {color:'#14171a',fontSize:'14px',fontWeight: 'bold', fontSize:'14px',marginLeft:'310px'},
    avatar: {marginTop:15, marginLeft:310},
    name:   {color:'Black', fontSize:'large'},
    sub:    {color: 'Black', marginTop: 5},
    tag:     {color:'#657786',fontSize: '14px'},
    img:    {width:200, minWidth:'83%',minHeight:'80%',marginLeft:'75px',marginRight:'20px', border: 'none', borderRadius:5},
    count:  {color:'#657786',display:'inline-block'}

}

const data = {
    index:  [1,2,3,4],
    titleP: {1:'Robin Sharma',2:'Shreya Ghoshal',3:'My Quotes',4:'National Geography'},
    titleS: {1:' @Robin · 2m',2:' @Shreya · 1h',3:' @quotesnew · 20h',4:' NatGeo · 5h'},
    avatar: {1:require("./images/robin.ico"),2:require("./images/shreya.ico"),
             3:require("./images/quote1.jpg"),4:require("./images/natgeo.jpg")},
    text:   {1:
             'Leadership is not about your title,it is about your behaviour.',
             2:
             'Tere Bina..My first single of 2018.A song very close to my heart.Releasing on 5th January.',
             3:
             'Quote of the day!!',
             4:
             'Photo of the Day:Little Lions'
            },
    reply:  {1:2,2:9,3:5,4:20},
    retweet:{1:8,2:2,3:115,4:102},
    likes:  {1:12,2:24,3:234,4:256},
    img:    {1:require("./images/robin1.jpg"),2:require("./images/shreya1.jpg"),
             3:require("./images/quote1.jpg"),4:require("./images/natgeo1.jpeg")},
    isLiked:{1:true,2:true,3:false,4:false}
};

const PostsMain = (props) => (
    <div>
        <Card style={postStyle.card}>
        <CardHeader
                    title={<span><b style={postStyle.name}>{data.titleP[props.num]}</b>
                                <a style={postStyle.tag}>{data.titleS[props.num]}</a></span>} 
                    subtitleStyle={postStyle.sub}
                    subtitle={data.text[props.num]} avatar={data.avatar[props.num]}
                    actAsExpander={false} showExpandableButton={true} />
                <CardMedia expandable={false}>
                    {data.img[props.num] ==='' 
                        ? <img /> : <img style={postStyle.img} src={data.img[props.num]} />}
                </CardMedia>
                <CardActions style={{marginLeft:30,color:'#657786'}}>
                    <IconButton style={{marginLeft:30,paddingTop:'2px'}}  iconStyle={{color:'#657786'}} tooltip="Reply"><Message /></IconButton>
                    <sup style={postStyle.count}>{data.reply[props.num]}</sup>
                    <IconButton style={{marginLeft:20}} iconStyle={{color:'#657786'}} tooltip="ReTweet">
                    <Repeat /></IconButton>
                    <sup style={postStyle.count}>{data.retweet[props.num]}</sup>
                    {data.isLiked[props.num] 
                        ?   <IconButton style={{marginLeft:20}} iconStyle={{color:'#8B0000'.liked,fill:'#8B0000'}} tooltip="Undo Like">
                             <Favorite  style={{fill:'#8B0000'}} />
                            </IconButton>
                        :   <IconButton style={{marginLeft:20}} iconStyle={{color:'#657786'}} tooltip="Like">
                                <FavoriteBorder />
                            </IconButton>
                    }
                    <sup style={postStyle.count}>{data.likes[props.num]}</sup>
                    <IconButton style={{marginLeft:20}} iconStyle={{color:'#657786'}} tooltip="Direct Message">
                     <MailOutline />
                    </IconButton>
                </CardActions>
            </Card>
    </div>
);

const ShowPosts = () => {
    const numbers = data.index;
    return(
        <div>{numbers.map( (number) => (<PostsMain num={number} />) 
       
    
    )}</div>
    );
};
export default ShowPosts;
