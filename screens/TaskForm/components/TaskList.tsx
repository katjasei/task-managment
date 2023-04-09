import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import useTasks from "../../../Hooks/useTasksHook";

  
  const TaskList = () => {
    //const [loadedTasks, setTasks] = useState<FirestoreTask[]>([]);
    const {tasks, loading, error, loadTasks } = useTasks()
  
  
    useEffect(() => {
      // Load tasks from Firebase or other data source   
      loadTasks();
    }, []);
  
    //console.log("After",loadedTasks)
    return (
      <View style= {styles.container}>
        {tasks.map((task) => (
          <View style= {styles.itemContainer}>
          <Text style= {styles.itemText} key={task.id}>{task.task.title}</Text>
          </View>
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
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: 20,
      marginVertical: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
    },
    itemText: {
      fontSize: 18,
      fontWeight: 'bold',
      flex: 1,
      marginRight: 20,
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