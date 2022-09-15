import {View, Text, SafeAreaView, StyleSheet, Image, KeyboardAvoidingView, Keyboard, ScrollView} from 'react-native';
import React from 'react';
import LoginForm from '../components/LoginScreen/LoginForm';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function LoginScreen({navigation}) {
  return (
  

    <SafeAreaView style={styles.container}>
        <TouchableOpacity 
        activeOpacity={1}
        >
      <View style={styles.logo}>
        <Image
          source={require('../assests/insta.jpg')}
          style={{width: 100, height: 100}}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <LoginForm navigation={navigation}/>
      </ScrollView>
      </TouchableOpacity>
    </SafeAreaView>
   

  );
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
