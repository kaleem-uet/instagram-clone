import {View, Text, SafeAreaView, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import SignupForm from '../components/SignUp/SignupForm';

export default function SignupScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require('../assests/insta.jpg')}
          style={{width: 100, height: 100}}
        />
       
      </View>
     <ScrollView showsVerticalScrollIndicator={false}>
      <SignupForm navigation={navigation}/>
      </ScrollView>
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
  