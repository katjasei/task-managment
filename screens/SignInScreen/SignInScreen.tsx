import { FirebaseApp, initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import {useState} from 'react';
import {Button} from 'react-native';
import {TextInput, View} from 'react-native';
import {SignInScreenNavigationProp} from '../../types';
import { StyleSheet } from 'react-native';

type Props = {
  navigation: SignInScreenNavigationProp;
};

 function SignInScreen( {navigation}: Props) {
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

  const handleSignIn = () => {
      createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('User signed in!');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput  
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput 
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
      <View style={styles.button} >
      <Button  
       color={"#ffffff"}
       title="Sign in"
       onPress={handleSignIn} />
       </View>
       <View style={styles.button} >
      <Button
        title="Don't have an account? Sign Up"
        onPress={() => navigation.navigate('SignUp')}
        color={"#ffffff"}
      />
      </View>
      </View>
    </View>
  );
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    width: "80%",
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    alignSelf: 'center', 
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 5,
    borderRadius: 5,
    //alignItems: 'center',
    //justifyContent: 'center',
    marginBottom: 10
  },
});


