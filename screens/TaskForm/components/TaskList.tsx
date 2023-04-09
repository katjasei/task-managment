import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import useTasks from "../../../Hooks/useTasksHook";
import TaskListItem from "./TaskListItem";
import {Task} from "../../../models";
import {TaskScreenNavigationProp} from "../../../types";

type TaskListProps = {
  navigation: TaskScreenNavigationProp;
}
  
  const TaskList = ({navigation} : TaskListProps) => {

    const {tasks, loading, error, loadTasks } = useTasks()
  
    useEffect(() => {
      // Load tasks from Firebase or other data source   
      loadTasks();
    }, []);

    const handlePress = (task: Task) => {
      navigation.navigate('TaskDetails', { task });
    };
  
    return (
      <View style= {styles.container}>
        {tasks.map((task) => (
          <TaskListItem key={task.id} task={task.task} onPress={handlePress} />
        ))}
      </View>
    );
  };  

  

  const styles = StyleSheet.create({
    container: {
     // flex: 1,
      backgroundColor: '#eee',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 20,
    },
    addButton: {
      margin: 20,
      padding: 10,
      backgroundColor: '#6C63FF',
      borderRadius: 10,
    },
    addButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  export default TaskList