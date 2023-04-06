import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  TaskScreen :undefined;
};

type SignInScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignIn'>;
type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;
type TaskScreenNavigationProp = StackNavigationProp<RootStackParamList, "TaskScreen">;