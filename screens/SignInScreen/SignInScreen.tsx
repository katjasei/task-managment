import { auth } from '../../utils/firebase'
import { useState } from 'react';
import { Button } from 'react-native';
import { TextInput, View } from 'react-native';
import { SignInScreenNavigationProp } from '../../types';
import { signInWithEmailAndPassword } from 'firebase/auth';

type Props = {
  navigation: SignInScreenNavigationProp;
};

function SignInScreen({navigation}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSignIn = () => {  
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('User signed in!');
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
      <Button title="Sign In" onPress={handleSignIn} />
      <Button
        title="Don't have an account? Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
}

export default SignInScreen;
