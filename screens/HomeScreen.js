import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'
import Header from '../components/Header'
import Stories from '../components/Stories'
import Post from '../components/Post'
import BottomTabs, { bottomTabIcons } from '../components/BottomTabs'
import  firebase from '@react-native-firebase/firestore'

export default function HomeScreen({navigation}) {
  const [post, setpost] = useState([]);
  useEffect(() => {
   firebase().collectionGroup("posts").onSnapshot(snapshot => {
    setpost(snapshot.docs.map(doc=>doc.data()));
  });
  // firebase()
  // .collection('Users')
  // .get()
  // .then(querySnapshot => {
  //   console.log('Total users: ', querySnapshot.size);

  //   querySnapshot.forEach(documentSnapshot => {
  //     console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
  //   });
  // });
  }, []);
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"black"}}>
      <Header navigation={navigation}/>
      <Stories/>
      <ScrollView>
        {
          post.map((post,index)=>(
           <Post post={post} index={index}/>  
          ))
        }
         
      </ScrollView>
      <BottomTabs Icons={bottomTabIcons}/>
    </SafeAreaView >
  )
}