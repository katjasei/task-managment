import { TouchableOpacity , Text, StyleSheet } from "react-native";
import { Task} from "../../../models";

type TaskListItemProps = {
    task: Task
    onPress: (task: Task) => void
}

const TaskListItem = ({task, onPress}: TaskListItemProps) => {
    return (

          <TouchableOpacity  style= {styles.itemContainer} key={task.id} onPress={()=>onPress(task)}>
          <Text style= {styles.itemText} key={task.id}>{task.title}</Text>
          </TouchableOpacity >
        )
  }; 

  const styles = StyleSheet.create({
  
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
    }
  });

  export default TaskListItem