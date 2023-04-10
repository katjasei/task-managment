import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";
import {StackScreenProps} from "@react-navigation/stack";
import {RootStackParamList} from "../../types";
import {useState} from "react";

type TaskFormScreenProps = StackScreenProps<RootStackParamList, 'TaskDetails'>;

const TaskDetails = ({ route }: TaskFormScreenProps) => {

  const { task, onUpdateTask, onDeleteTask } = route.params

  const [completed, setCompleted] = useState(task.task.completed);

  const handleToggleCompleted = (value: boolean) => {
    const updatedTask = { ...task, completed: value };
    onUpdateTask(updatedTask);
    setCompleted(value);
  };
   
    return (
      <View style={styles.container}>
      <Text style={styles.title}>{task.task.title}</Text>
      <Text style={styles.description}>{task.task.description}</Text>
      <Switch
          style={styles.completedToggle}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={completed ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          value={completed}
          onValueChange={handleToggleCompleted}
        />
        <TouchableOpacity style={styles.deleteButton} onPress={()=>onDeleteTask(task)}>
          <Text style={styles.text}>Delete Task</Text>
        </TouchableOpacity>
    </View>
    );
  };

  
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    color: '#777',
  },
  completedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  completedText: {
    marginRight: 10,
    fontSize: 18,
  },
  completedToggle: {
   // marginLeft: 'auto',
  },
  deleteButton: {
    backgroundColor: '#EF5350',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    color: "#fff"
  },
  text: {
    color: "#fff"
  },
});
  export default TaskDetails