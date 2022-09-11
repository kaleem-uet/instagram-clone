import {useState} from 'react';
import {View, Text, TouchableOpacity, Image,StyleSheet} from 'react-native';
import React from 'react';
import { Divider } from '@rneui/themed';

export const bottomTabIcons = [
  {
    name: 'Home',
    active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
    inactive:
      'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png',
  },
  {
    name: 'Search',
    active: 'https://img.icons8.com/ios-filled/500/ffffff/search--v1.png',
    inactive: 'https://img.icons8.com/ios/500/ffffff/search--v1.png',
  },
  {
    name: 'Reels',
    active: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png',
    inactive: 'https://img.icons8.com/ios/500/ffffff/instagram-reel.png',
  },
  {
    name: 'Shop',
    active:
      'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png',
    inactive:
      'https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png',
  },
  {
    name: 'Profile',
    active:
      'https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj',
    inactive:
      'https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj',
  },
];
export default function BottomTabs({Icons}) {
  const [activeTab, setactiveTab] = useState('Home');
  const Icon = ({icon}) => (
    <TouchableOpacity onPress={() => setactiveTab(icon.name)}>
      <Image source={{uri: activeTab===icon.name ? icon.active:icon.inactive}}  
      style={[styles.icon, icon.name==="Profile" ?styles.profilePic():"null",
        activeTab==="Profile" && icon.name===activeTab ? styles.profilePic(activeTab) :null
      
      ]}/>
    </TouchableOpacity>
  );
  return (
    <View  style={styles.wrapper}>
    <Divider width={1} orientation={'vertical'}/>
    <View style={styles.constaner}>
      {Icons.map((icon, index) => (
        <Icon key={index} icon={icon} />
      ))}
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
    wrapper:{
        zIndex:999,
        position:"absolute",
        width:"100%",
        backgroundColor:"#000",
        bottom:"0%"
        
    },
  constaner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    paddingTop: 10,
  },
  icon:{
    width:30,
    height:30,

  },
  profilePic:( activeTab='')=>({
    borderRadius:25,
    borderColor:"#fff",
    borderWidth:activeTab==="Profile"?2:0,
  })
});
