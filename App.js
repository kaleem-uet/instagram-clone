/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AuthNavigation from './AuthNavigation';
import SignedInStack from './Navigations';
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';


export default function App(){ return <AuthNavigation/>}
  //   <SafeAreaView style={{flex:1,backgroundColor:"black"}}>
  //     <NewPostScreen/>
  //   </SafeAreaView>
  // );



 
