import { FirebaseApp, initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import {useState} from 'react';
import {Button} from 'react-native';
import {TextInput, View} from 'react-native';
import {SignUpScreenNavigationProp} from '../../types';

type Props = {
  navigation: SignUpScreenNavigationProp;
};

function SignUpScreen({navigation}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const firebaseConfig = {
    // your firebase config object
    apiKey: "AIzaSyA1erpANR182UiRahkLz1J34iL8RxIMg-8",
    authDomain: "taskmanagment-5a6ee.firebaseapp.com",
    projectId: "taskmanagment-5a6ee",
    storageBucket: "taskmanagment-5a6ee.appspot.com",
    messagingSenderId: "924588065987",
    appId: "1:924588065987:web:174548841ab3c91323ce76"
  };
  
    // Initialize Firebase
    const app: FirebaseApp = initializeApp(firebaseConfig);
    const auth = getAuth(app)

  const handleSignUp = () => {  
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('User account created!');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign up" onPress={handleSignUp} />
      <Button
        title="Already have an account? Sign In"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
}

export default SignUpScreen;
