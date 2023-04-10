import { TouchableOpacity , Text, StyleSheet } from "react-native";
import { FirestoreTask } from "../../../models";

type TaskListItemProps = {
    task: FirestoreTask
    onPress: (task: FirestoreTask) => void
}

const TaskListItem = ({task, onPress}: TaskListItemProps) => {
    const styles = StyleSheet.create({
  
        itemContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginVertical: 10,
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: task.task.completed ? "#81b0ff" : '#fff',
          borderRadius: 10,
        },
        itemText: {
          fontSize: 18,
          fontWeight: 'bold',
          flex: 1,
          marginRight: 20,
        }
      });
    return (

          <TouchableOpacity  style= {styles.itemContainer} key={task.id} onPress={()=>onPress(task)}>
          <Text style= {styles.itemText} key={task.id}>{task.task.title}</Text>
          </TouchableOpacity >
        )
  }; 



  export default TaskListItem