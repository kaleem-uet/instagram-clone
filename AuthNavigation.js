import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react';
import { SignedInStack ,SiginOutStack } from './Navigations'
import auth from '@react-native-firebase/auth';

export default function AuthNavigation() {
const [currentUser, setcurrentUser] = useState(null)
    
const userHandler=user=>{
   user?setcurrentUser(user):setcurrentUser(null)
}
  useEffect(() => {
    auth().onAuthStateChanged(user=>userHandler(user));
   
  }, []);    
    return <>{currentUser? <SignedInStack/> :<SiginOutStack/> }</>
}