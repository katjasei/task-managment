import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './screens/SignInScreen/SignInScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import {RootStackParamList} from './types';
import TaskListScreen from './screens/TaskForm/TaskListScreen';
import TaskForm from './screens/TaskForm/TaskForm';
import TaskDetails from './screens/TaskDetailScreen/TaskDetails';

export default function App() {

  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <View style={styles.container}>
      <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="TaskScreen" component={TaskListScreen} />
      <Stack.Screen name="TaskForm" component={TaskForm} />
      <Stack.Screen name="TaskDetails" component={TaskDetails} />
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
