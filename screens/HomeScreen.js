import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Stories from '../components/Stories'
import Post from '../components/Post'
import BottomTabs, { bottomTabIcons } from '../components/BottomTabs'

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"black"}}>
      <Header navigation={navigation}/>
      <Stories/>
      <ScrollView>
         <Post/>
         <Post/>
      </ScrollView>
      <BottomTabs Icons={bottomTabIcons}/>
    </SafeAreaView >
  )
}