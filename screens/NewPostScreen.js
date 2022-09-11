import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import AddNewPost from '../components/newPost/AddNewPost'

export default function NewPostScreen({navigation}) {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"black"}}>
      <AddNewPost navigation={navigation}/>
    </SafeAreaView>
  )
}