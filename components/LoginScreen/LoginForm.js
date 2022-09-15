import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native';
import React, {useState,useEffect} from 'react';
import * as yup from 'yup';
import {Formik, } from 'formik';
import auth from '@react-native-firebase/auth';
const LoginValidationSchema = yup.object().shape({
  email: yup.string().email().required(" An email is required"),
  password:yup.string().required().min(8,"Your password has to have at least 8 characters")
});

export default function LoginForm({navigation}) {
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [])
  
  const OnSingIn=  (email,password)=>{
    
      setLoading(true);
       auth().signInWithEmailAndPassword(email, password).then(()=>{
        Alert.alert(
          "Alert",
          "Login sucessfully ",
          [
            {text: 'OK', onPress: () =>console.log("")},  
          ]
        ); }  
       ).catch((error)=>{
        setLoading(false)
        alert(error)
       })
    
    
  }
  
  return (
    <KeyboardAvoidingView>
      <View style={styles.conatiner}>
      <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={(values,onSubmitProps)=> {
        OnSingIn(values.email,values.password,navigation);
        onSubmitProps.resetForm()       
      }}
      validationSchema={LoginValidationSchema}>
      {({handleBlur, handleChange, errors, handleSubmit,isValid, values}) => (
        <>
           <View style={[styles.inputField,{
            borderColor:values.email.length < 1  ? "red":"#CCC"
           }]}>
          <TextInput
            placeholder="phone no,username,or email"
            autoCapitalize="none"
            keyboardType="email-address"
            placeholderTextColor="#444"
            textContentType="emailAddress"
            autoFocus={true}
            value={values.email}
            onChangeText={handleChange('email')}
          />
          
        </View>
        <View style={[styles.inputField,{
         borderColor: 1 > values.password.length  || values.password.length >=6 ?"#CCC":"red"
        }]}>
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
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <TouchableOpacity
            onPress={() => {
              console.log('go to forgot ');
            }}>
            <Text style={{color: '#0096F6'}}>Forgot password</Text>
          </TouchableOpacity>
        </View>
        <Pressable
          style={styles.button(isValid)}
          onPress={handleSubmit} >
            {
              Loading ? (<>
              <ActivityIndicator size={25} color={'white'} />        
              </>):(<>
                <Text style={styles.loginText}>Log in</Text>
              </>)
            }
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
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate("SignupScreen")}}>
          
            <Text style={{color: '#0096F6'}}> Sign up</Text>
             
           
        
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  conatiner: {
    marginTop: 80,
  },
  inputField:{
    borderWidth: 1,
    borderColor:"black",
    padding: 3,
    borderRadius: 4,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
  },
  button:isValid=>( {
    backgroundColor: isValid ? '#0096F6':'#9ACAF7',
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
