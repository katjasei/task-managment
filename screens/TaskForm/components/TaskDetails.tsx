import { View, Text, Switch } from "react-native";
import {Task} from "../../../models";

const TaskDetails = ({ task }: { task: Task }) => {
    return (
      <View>
        <Text>{task.title}</Text>
        <Text>{task.description}</Text>
        <Switch value={task.completed} />
      </View>
    );
  };
  
  export default TaskDetails