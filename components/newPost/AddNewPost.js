import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import FormikPostUploader from './FormikPostUploader';

export default function AddNewPost({navigation}) {
  return (
    <View style={{}}>
      <Header navigation={navigation} />
      <FormikPostUploader navigation={navigation}/>
    </View>
  );
}

const Header = ({navigation}) => (
  <>
    <View style={styles.headerContainer}>
      <TouchableOpacity activeOpacity={0.99} onPress={()=>{ navigation.goBack()}} >
        <Image
          source={require('../../assests/back.png')}
          style={{width:25, height:25,marginLeft:0}}
        />
      </TouchableOpacity>

      <Text style={{color: 'white',fontWeight:"700",fontSize:20}}>NEW POST </Text>
      <Text style={{color: 'white'}}></Text>

    </View>
  </>
);
const styles = StyleSheet.create({
  headerContainer: {
      
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   
  },
});
