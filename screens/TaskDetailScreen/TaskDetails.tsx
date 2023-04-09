import { View, Text, Switch } from "react-native";
import {Task} from "../../models";
import {StackScreenProps} from "@react-navigation/stack";
import {RootStackParamList} from "../../types";

type TaskFormScreenProps = StackScreenProps<RootStackParamList, 'TaskDetails'>;

const TaskDetails = ({ route }: TaskFormScreenProps) => {

  const { task } = route.params
   
    return (
      <View>
        <Text>{task.title}</Text>
        <Text>{task.description}</Text>
        <Switch value={task.completed} />
      </View>
    );
  };
  
  export default TaskDetails