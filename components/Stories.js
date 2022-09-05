import { View, Text, ScrollView,Image,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
const userName="UserNamekhangee";

export default function Stories() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
     <TouchableOpacity activeOpacity={0.67}>
        <View>
         <Image style={styles.storyImage} source={{uri:"https://cdn.pixabay.com/photo/2017/06/27/15/37/girl-2447785_960_720.jpg"}}/>        
          <Text style={{color:"white"}}>{
            userName.length > 11 ?  userName.slice(0,10).toLocaleLowerCase()+"...":userName.toLocaleLowerCase() 
          }</Text>
        </View>
         
     </TouchableOpacity>
     <TouchableOpacity activeOpacity={0.67}>
        <View style={{alignItems:"center"}}>
         <Image style={styles.storyImage} source={{uri:"https://cdn.pixabay.com/photo/2017/06/27/15/37/girl-2447785_960_720.jpg"}}/>        
          <Text style={{color:"white"}}>{
            userName.length > 11 ?  userName.slice(0,10).toLocaleLowerCase()+"...":userName.toLocaleLowerCase() 
          }</Text>
        </View>
         
     </TouchableOpacity>
     <TouchableOpacity activeOpacity={0.67}>
        <View>
         <Image style={styles.storyImage} source={{uri:"https://cdn.pixabay.com/photo/2017/06/27/15/37/girl-2447785_960_720.jpg"}}/>        
          <Text style={{color:"white"}}>{
            userName.length > 11 ?  userName.slice(0,10).toLocaleLowerCase()+"...":userName.toLocaleLowerCase() 
          }</Text>
        </View>
         
     </TouchableOpacity>
     <TouchableOpacity activeOpacity={0.67}>
        <View>
         <Image style={styles.storyImage} source={{uri:"https://cdn.pixabay.com/photo/2017/06/27/15/37/girl-2447785_960_720.jpg"}}/>        
          <Text style={{color:"white"}}>{
            userName.length > 11 ?  userName.slice(0,10).toLocaleLowerCase()+"...":userName.toLocaleLowerCase() 
          }</Text>
        </View>
         
     </TouchableOpacity>
     <TouchableOpacity activeOpacity={0.67}>
        <View>
         <Image style={styles.storyImage} source={{uri:"https://cdn.pixabay.com/photo/2017/06/27/15/37/girl-2447785_960_720.jpg"}}/>        
          <Text style={{color:"white"}}>{
            userName.length > 11 ?  userName.slice(0,10).toLocaleLowerCase()+"...":userName.toLocaleLowerCase() 
          }</Text>
        </View>
         
     </TouchableOpacity>
     <TouchableOpacity activeOpacity={0.67}>
        <View>
         <Image style={styles.storyImage} source={{uri:"https://cdn.pixabay.com/photo/2017/06/27/15/37/girl-2447785_960_720.jpg"}}/>        
          <Text style={{color:"white"}}>{
            userName.length > 11 ?  userName.slice(0,10).toLocaleLowerCase()+"...":userName.toLocaleLowerCase() 
          }</Text>
        </View>
         
     </TouchableOpacity>
     <TouchableOpacity activeOpacity={0.67}>
        <View>
         <Image style={styles.storyImage} source={{uri:"https://cdn.pixabay.com/photo/2017/06/27/15/37/girl-2447785_960_720.jpg"}}/>        
          <Text style={{color:"white"}}>{
            userName.length > 11 ?  userName.slice(0,10).toLocaleLowerCase()+"...":userName.toLocaleLowerCase() 
          }</Text>
        </View>
         
     </TouchableOpacity>
     <TouchableOpacity activeOpacity={0.67}>
        <View>
         <Image style={styles.storyImage} source={{uri:"https://cdn.pixabay.com/photo/2017/06/27/15/37/girl-2447785_960_720.jpg"}}/>        
          <Text style={{color:"white"}}>{
            userName.length > 11 ?  userName.slice(0,10).toLocaleLowerCase()+"...":userName.toLocaleLowerCase() 
          }</Text>
        </View>
         
     </TouchableOpacity>
     <TouchableOpacity activeOpacity={0.67}>
        <View>
         <Image style={styles.storyImage} source={{uri:"https://cdn.pixabay.com/photo/2017/06/27/15/37/girl-2447785_960_720.jpg"}}/>        
          <Text style={{color:"white"}}>{
            userName.length > 11 ?  userName.slice(0,10).toLocaleLowerCase()+"...":userName.toLocaleLowerCase() 
          }</Text>
        </View>
         
     </TouchableOpacity>

     <TouchableOpacity activeOpacity={0.67}>
        <View>
         <Image style={styles.storyImage} source={{uri:"https://cdn.pixabay.com/photo/2017/06/27/15/37/girl-2447785_960_720.jpg"}}/>        
          <Text style={{color:"white"}}>{
            userName.length > 11 ? userName.slice(0,10).toLocaleLowerCase()+'..':userName.toLocaleLowerCase() 
          }</Text>
        </View>
         
     </TouchableOpacity>
      

    </ScrollView>
  )
}


const styles=StyleSheet.create({
    storyImage:{
        width:70,
        height:70,
        borderRadius:35,
        marginLeft:10,
        borderWidth:3,
        borderColor:"#ff8501",
        resizeMode:"contain"
    }
})