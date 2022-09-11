import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import React from 'react';
import SignupForm from '../components/SignUp/SignupForm';

export default function SignupScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require('../assests/story1.jpg')}
          style={{width: 100, height: 100}}
        />
       
      </View>
     
      <SignupForm navigation={navigation}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      paddingHorizontal: 12,
      flex: 1,
      backgroundColor: 'white',
    },
    logo: {
      marginTop: 60,
      alignItems: 'center',
    },
  });
  