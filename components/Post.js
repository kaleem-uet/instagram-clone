import {View, Text, Image} from 'react-native';
import React from 'react';
import {Divider} from '@rneui/themed';
const UserNama = 'userName khan';
const Liks="9000";
export default function Post({post,index}) {
  console.log("this is post from post screen",post.imgurl);
  return (
    <View style={{marginBottom: 50}}>
      <Divider width={0.5} orientation={'horizontal'} />
      <View style={{marginTop: 5}}>
        <PostHeader/>
        <PosterImage />
        <PostFootor post={post} index={index}/>
      </View>
    </View>
  );
}

const PostHeader = () => (
  <>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            borderWidth: 3,
            borderColor: '#ff8501',
          }}
          source={require('../assests/story1.jpg')}
        />
        <Text style={{color: 'white', fontSize: 16, marginLeft: 3}}>
          {UserNama.length > 11
            ? UserNama.slice(0, 10).toLocaleLowerCase() + '...'
            : UserNama.toLocaleLowerCase()}
        </Text>
      </View>
      <Text
        style={{
          color: 'white',
          fontWeight: '600',
          fontSize: 25,
          marginHorizontal: 10,
        }}>
        ...
      </Text>
    </View>
  </>
);

const PosterImage = () => (
  <>
    <View
      style={{
        height: 450,
        marginTop: 5,
      }}>
      <Image
        style={{height: '100%', width: '100%', resizeMode: 'cover'}}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2017/06/27/15/37/girl-2447785_960_720.jpg',
        }}
      />
    </View>
  </>
);

const PostFootor=({post})=>(

    <>
       <Icon/>
       <Likes/>
       <Captions caption={post.caption} username={post.user}/>
       <CommentSections/>
    </>

)

// here will be three condation for comments 
// 1:) if zero comment no comment will render 
//2 :) if one comment only view comment will render 
//3:) if more the one view all 3 comments will render  
const CommentSections=()=>
(
<>
{/* { 
//for the lenght of comments post.comment.lenght 
 for the condatinon to !!post.comments.length (comments ):("")
Post.comments.length > 1 ? "comments":"comments"  

} */}
<Text style={{color:"gray"}}>view all comments </Text>
  
</>
)



const Captions=({caption,username})=>(
  <>
    <View style={{marginTop:3}}>
      <Text style={{color:"white"}}>
       <Text style={{fontWeight:"600"}}>
           {username}
       </Text>
      <Text>{caption}</Text>
      </Text>
    </View>
  </>
)
const Likes=()=>(
  <>
    <View style={{flexDirection:"row"}}>
      <Text style={{color:"white",fontWeight:"600"}} >{Liks.toLocaleString('en')}Likes</Text>
    </View>
  </>
)    

const Icon=()=>(
    <>
     <View style={{flexDirection:"row", justifyContent:"space-between",alignItems:"center", marginTop:10}}>
        <View style={{flexDirection:"row",}}>
        <Image style={{height:30,width:30,}} source={require("../assests/heart.png")}/>
        <Image style={{height:30,width:30,marginLeft:10}} source={require("../assests/comment.png")}/>
        <Image style={{height:30,width:30,marginLeft:10}} source={require("../assests/airplane.png")}/>
        </View>
        <View>
        <Image style={{height:30,width:30,marginRight:10}} source={require("../assests/save.png")}/>
        </View>
       </View>
    </>
)



