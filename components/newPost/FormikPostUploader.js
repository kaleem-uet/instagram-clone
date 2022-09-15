import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import * as yup from 'yup';
import {Formik, validateYupSchema} from 'formik';
import {Button} from '@rneui/themed';
import {Divider} from '@rneui/base';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/auth';

const uploadePostSchema = yup.object().shape({
  imgUrl: yup.string().required('A url is required'),
  caption: yup
    .string()
    .min(10, 'enter some caption')
    .max(2200, 'caption has reach it lemit')
    .required('caption reqired'),
});
const ProvidedImage = '../../assests/story1.jpg';
export default function FormikPostUploader({navigation}) {
  const [thumbnail, setthumbnail] = React.useState(ProvidedImage);
  const [CurrentLoggedInUser, setCurrentLoggedInUser] = React.useState();

  const getUser = () => {
    const user = firebase.auth().currentUser;
    const subscriber = firestore()
      .collection('Users')
      .where('owner_uid', '==', user.uid)
      .limit(1)
      .onSnapshot(snapshot =>
        snapshot.docs.map(doc => {
          setCurrentLoggedInUser({
            username: doc.data().username,
            profilePicture: doc.data().profile_picture,
          });
        }),
      );
    // Stop listening for updates when no longer required
    return () => subscriber();
  };
  React.useEffect(() => {
    getUser();
  }, []);

  const UploadePostTofireBase = (imgurl, caption) => {
    const unsubscribe = firestore()
      .collection('Users')
      .doc(firebase.auth().currentUser.email).collection("posts").add({
        imgurl:imgurl,
        user:CurrentLoggedInUser.username,
        profile_picture:CurrentLoggedInUser.profilePicture,
        owner_uid:firebase.auth().currentUser.uid,
        caption:caption,
        createAt:firebase.firestore.FieldValue.serverTimestamp(),
        likes:0,
        likes_by_user:[],
        comment:[],
      })
      return unsubscribe;
  };
  return (
    <Formik
      initialValues={{imgUrl: '', caption: ''}}
      onSubmit={values => {
        UploadePostTofireBase(values.imgUrl,values.caption);
        navigation.goBack();
      }}
      validationSchema={uploadePostSchema}>
      {({handleBlur, handleChange, errors, handleSubmit, values}) => (
        <>
          <View
            style={{
              margin: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Image
              source={require(ProvidedImage)}
              style={{width: 100, height: 100}}
            />
            <View style={{flex: 1, marginLeft: 12}}>
              <TextInput
                style={{color: 'white', fontSize: 20}}
                // onChange={(e)=>setthumbnail(e.nativeEvent.text)}
                placeholder="caption here"
                placeholderTextColor={'gray'}
                value={values.caption}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                multiline={true}
              />
              {errors.caption && (
                <Text style={{color: 'red', fontSize: 18}}>
                  {errors.caption}
                </Text>
              )}
            </View>
          </View>
          <Divider width={0.2} orientation={'vertical'} />
          <TextInput
            style={{color: 'white'}}
            placeholder="Image Url"
            placeholderTextColor={'gray'}
            value={values.imgUrl}
            onChangeText={handleChange('imgUrl')}
            onBlur={handleBlur('imgUrl')}
          />
          {errors.imgUrl && (
            <Text style={{color: 'red', fontSize: 18}}>{errors.imgUrl}</Text>
          )}

          <Button onPress={handleSubmit} title="Share" />
        </>
      )}
    </Formik>
  );
}
