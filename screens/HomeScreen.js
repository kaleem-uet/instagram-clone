import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Stories from '../components/Stories'
import Post from '../components/Post'

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex:1}}>
      <Header/>
      <Stories/>
      <ScrollView>
         <Post/>
         <Post/>
      </ScrollView>
    </SafeAreaView >
  )
}