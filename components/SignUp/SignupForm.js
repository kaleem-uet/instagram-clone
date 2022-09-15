import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import * as yup from 'yup';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import db from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import {ActivityIndicator} from 'react-native';
const SignUpValidationSchema = yup.object().shape({
  email: yup.string().email().required(' An email is required'),
  username: yup.string().required(),
  password: yup
    .string()
    .required()
    .min(8, 'Your password has to have at least 8 characters'),
});

export default function SignupForm({navigation}) {
  const [Loading, setLoading] = useState(false);
 


  

  const register = async (email, password, username) => {
   try {
    setLoading(true)
     const authUser=  await auth().createUserWithEmailAndPassword(email,password);
     alert('User account created & signed in!');
      console.log('User account created & signed in!');
      firestore()
        .collection('Users')
        .doc(authUser.user.email)
        .set({
          owner_uid: authUser.user.uid,
          username: username,
          email:authUser.user.email,
          profile_picture: `https://api.lorem.space/image/face?w=150&h=220`,
        })
        .then(() => {
          console.log('User added!');
        }).catch((err)=>{
          console.log(err);
        })
   } catch (error) {
    setLoading(false);
        if (error.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid!');
        }

        alert(error.message);
   }
    
  }
    // setLoading(true);
    // auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then(() => {
       
    //   alert('User account created & signed in!');
    //     console.log('User account created & signed in!');
    //     firestore()
    //     .collection('Users')
    //     .add({
    //       username: username,
    //     })
    //     .then(() => {
    //       console.log('User added!');
    //     }).catch((err)=>{
    //       console.log(err);
    //     })
    //   })
    //   .catch(error => {
    //     setLoading(false);
    //     if (error.code === 'auth/email-already-in-use') {
    //       alert('That email address is already in use!');
    //     }

    //     if (error.code === 'auth/invalid-email') {
    //       alert('That email address is invalid!');
    //     }

    //     alert(error.message);
    //   });
  // }

  return (
    <KeyboardAvoidingView>
      <View style={styles.conatiner}>
        <Formik
          initialValues={{email: '', password: '', username: ''}}
          onSubmit={(values, onSubmitProps) => {
            register(values.email, values.password, values.username);
            onSubmitProps.resetForm();
            // navigation.replace("LoginScreen")
          }}
          validationSchema={SignUpValidationSchema}>
          {({
            handleBlur,
            handleChange,
            errors,
            handleSubmit,
            isValid,
            values,
          }) => (
            <>
              <View
                style={[
                  styles.inputField,
                  {
                    borderColor: values.email.length < 1 ? 'red' : '#CCC',
                  },
                ]}>
                <TextInput
                  placeholder="phone no,or email"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  placeholderTextColor="#444"
                  textContentType="emailAddress"
                  value={values.email}
                  onChangeText={handleChange('email')}
                />
              </View>
              <View
                style={[
                  styles.inputField,
                  {
                    borderColor: values.username.length < 1 ? 'red' : '#CCC',
                  },
                ]}>
                <TextInput
                  placeholder="username"
                  autoCapitalize="none"
                  keyboardType="default"
                  placeholderTextColor="#444"
                  value={values.username}
                  onChangeText={handleChange('username')}
                />
              </View>
              <View
                style={[
                  styles.inputField,
                  {
                    borderColor:
                      1 > values.password.length || values.password.length >= 6
                        ? '#CCC'
                        : 'red',
                  },
                ]}>
                <TextInput
                  placeholder="password"
                  autoCapitalize="none"
                  placeholderTextColor="#444"
                  keyboardType="default"
                  secureTextEntry={true}
                  maxLength={8}
                  value={values.password}
                  onChangeText={handleChange('password')}
                />
              </View>

              <Pressable style={styles.button(isValid)} onPress={handleSubmit}>
                {Loading ? (
                  <>
                    <ActivityIndicator size={25} color={'white'} />
                  </>
                ) : (
                  <>
                    <Text style={styles.loginText}>Sign Up</Text>
                  </>
                )}
              </Pressable>
            </>
          )}
        </Formik>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 50,
          justifyContent: 'center',
        }}>
        <Text>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}>
          <Text style={{color: '#0096F6'}}> Log in</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  conatiner: {
    marginTop: 80,
  },
  inputField: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 3,
    borderRadius: 4,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
  },
  button: isValid => ({
    backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
    padding: 10,
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 4,
  }),
  loginText: {
    fontWeight: '600',
    color: 'white',
  },
});
