import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

type SignInScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignIn'>;
type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;