import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Header({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assests/header-logo.png')}
      />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity activeOpacity={0.87} onPress={()=>{navigation.push("NewPostScreen")}}>
          <Image style={styles.icon} source={require('../assests/add.png')} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.87}>
          <Image style={styles.icon} source={require('../assests/heart.png')} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.87}>
            <View style={{
              width:25,
              height:20,backgroundColor:"red",
              alignItems:"center",
              justifyContent:"center",
              position:"absolute",
              left:25,
              bottom:18,
              zIndex:100,
              borderRadius:5,
        }}>
            <Text style={{color:"white", fontWeight:"600"}}>11</Text>

            </View>
          <Image
            style={styles.icon}
            source={require('../assests/messenger2.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 5,
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
  },
  icon: {
    width: 30,
    height: 30,
    margin: 5,
    resizeMode: 'contain',
  },
});
