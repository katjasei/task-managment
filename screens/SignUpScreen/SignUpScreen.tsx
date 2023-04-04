import { auth } from '../../utils/firebase'
import { useState } from 'react';
import { Button } from 'react-native';
import { TextInput, View, ImageBackground, Dimensions  } from 'react-native';
import { SignUpScreenNavigationProp } from '../../types';
import { StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import image from '../../images/task-managment.jpg';

type Props = {
  navigation: SignUpScreenNavigationProp;
};

const { width, height } = Dimensions.get('window');


 function SignUpScreen( {navigation}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
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
      <ImageBackground source={image} style={styles.image}>
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
       title="Sign Up"
       onPress={handleSignUp} />
       </View>
       <View style={styles.button} >
      <Button
        title="Already have an account? Sign In"
        onPress={() => navigation.navigate('SignIn')}
        color={"#ffffff"}
      />
      </View>
      </View>
      </ImageBackground>
    </View>
    
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({

  image: {
    flex:1,
    opacity: 0.5,
    width: width,
    height: height,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flex:1,
  },

  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  input: {
    borderColor: '#000',
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


