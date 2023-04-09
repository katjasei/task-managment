import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  TaskScreen :undefined;
  TaskForm: {onSubmit: (task: Task) => void};
  TaskDetails: {task: Task};
};

type SignInScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignIn'>;
type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;
type TaskScreenNavigationProp = StackNavigationProp<RootStackParamList, "TaskScreen">;
type TaskFormNavigationProp = StackNavigationProp<RootStackParamList, "TaskForm">
type TaskDetailNavigationProp = StackNavigationProp<RootStackParamList, "TaskDetails">

