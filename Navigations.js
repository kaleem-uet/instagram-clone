import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
const Stack = createNativeStackNavigator();
const screenOption={
  headerShown:false
}
export const SignedInStack = () => (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOption}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export const SiginOutStack=()=>(
  <NavigationContainer>
  <Stack.Navigator initialRouteName="LoginScreen" screenOptions={screenOption}>
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="SignupScreen" component={SignupScreen} />
  </Stack.Navigator>
</NavigationContainer>
)
 