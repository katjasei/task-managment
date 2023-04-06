import { useEffect, useState } from "react";
import { View, Text} from "react-native";
import {Task} from "../../../models";

  
  const TaskList = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
  
    useEffect(() => {
      // Load tasks from Firebase or other data source
      const loadedTasks: Task[] = [];
      setTasks(loadedTasks);
    }, []);
  
    return (
      <View>
        {tasks.map((task) => (
          <Text key={task.id}>{task.title}</Text>
        ))}
      </View>
    );
  };  

  export default TaskList