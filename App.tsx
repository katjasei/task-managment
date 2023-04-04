import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './screens/SignInScreen/SignInScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import {RootStackParamList} from './types';

export default function App() {

  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <View style={styles.container}>
      <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  </NavigationContainer>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height:"100%"
  },
});
