import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import useTasks from "../../../Hooks/useTasksHook";
import {FirestoreTask} from "../../../models";

  
  const TaskList = () => {
    const [loadedTasks, setTasks] = useState<FirestoreTask[]>([]);
    const {tasks, loading, error } = useTasks()
  
  
    useEffect(() => {
      // Load tasks from Firebase or other data source   
      setTasks(tasks);
    }, []);
  
    //console.log("After",loadedTasks)
    return (
      <View style= {styles.container}>
        {loadedTasks.map((task) => (
          <Text style= {styles.input} key={task.task.id}>{task.task.title}</Text>
        ))}
      </View>
    );
  };  

  
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height:"100%",
      backgroundColor: "#000000"
    },
    input: {
     color: "#FFFFFF"
    },
  });

  export default TaskList