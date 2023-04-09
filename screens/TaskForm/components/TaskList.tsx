import { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import useTasks from "../../../Hooks/useTasksHook";
import TaskListItem from "./TaskListItem";
import { FirestoreTask } from "../../../models";
import {TaskScreenNavigationProp} from "../../../types";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import {db} from "../../../utils/firebase";

type TaskListProps = {
  navigation: TaskScreenNavigationProp;
}
  
  const TaskList = ({navigation} : TaskListProps) => {

    const {tasks, loading, error, loadTasks } = useTasks()
  
    useEffect(() => {
      // Load tasks from Firebase or other data source   
      loadTasks();
    }, []);

    
    const onUpdateTask = async (task: FirestoreTask) => {
      try {
        await updateDoc(doc(db, 'tasks', task.id), {
          task: {
           ...task.task, 
          completed: !task.task.completed
        }
        });
        console.log('Task updated successfully');
      } catch (error) {
        console.error('Error updating task: ', error);
      }
    }

    const onDeleteTask = async (task: FirestoreTask) => {
      try {
        await deleteDoc(doc(db, 'tasks', task.id));
        console.log('Task deleted successfully');
        navigation.goBack();
      } catch (error) {
        console.error('Error deleting task: ', error);
      }
    };
    

    const handlePress = (task: FirestoreTask) => {
      navigation.navigate('TaskDetails', { task, onUpdateTask, onDeleteTask });
    };
  
    return (
      <View style= {styles.container}>
        <Text style= {styles.titleText}>Task List</Text>
        {tasks.map((task) => (
          <TaskListItem key={task.id} task={task} onPress={handlePress} />
        ))}
      </View>
    );
  };  

  

  const styles = StyleSheet.create({
    container: {
     // flex: 1,
      backgroundColor: '#111c2e',
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
    titleText: {
      color: '#fff',
      fontSize: 25,
      fontWeight: "bold",
      textAlign: "center"

    },
    addButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  export default TaskList