import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import * as yup from 'yup';
import {Formik, validateYupSchema} from 'formik';
import {Button} from '@rneui/themed';
import {Divider} from '@rneui/base';
const uploadePostSchema = yup.object().shape({
  imgUrl: yup.string().url().required('A url is required'),
  caption: yup
    .string()
    .min(10, 'enter some caption')
    .max(2200, 'caption has reach it lemit')
    .required('caption reqired'),
});
const ProvidedImage = '../../assests/story1.jpg';
export default function FormikPostUploader({navigation}) {
  const [thumbnail, setthumbnail] = React.useState(ProvidedImage);
  return (
    <Formik
      initialValues={{imgUrl: '', caption: ''}}
      onSubmit={values => {console.log(values)
       navigation.goBack()
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
