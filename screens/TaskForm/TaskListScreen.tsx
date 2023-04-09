import { Task } from '../../models';
import { View, StyleSheet } from 'react-native';
import TaskList from './components/TaskList';
import AddTaskButton from './components/AddTaskButton';
import { TaskScreenNavigationProp } from '../../types';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../utils/firebase';

type Props = {
  navigation: TaskScreenNavigationProp;
};

const TaskListScreen = ({ navigation }: Props) => {
  const handleTaskSubmit = async (task: Task) => {
    try {
      await addDoc(collection(db, 'tasks'), { task: task });
      console.log('Task added successfully');
    } catch (error) {
      console.error('Error adding task: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskList}>
        <TaskList navigation={navigation} />
      </View>
      <View style={styles.addButtonContainer}>
        <AddTaskButton navigation={navigation} onSubmit={handleTaskSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111c2e',
    flex: 1,
    flexDirection: 'row',
  },
  taskList: {
    flex: 3,
  },
  addButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TaskListScreen;
