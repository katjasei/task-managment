import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import {Task} from '../../models';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../types';


type TaskFormScreenProps = StackScreenProps<RootStackParamList, 'TaskForm'>;

const TaskForm = ({route, navigation }: TaskFormScreenProps) => {

  const { onSubmit } = route.params
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTaskSubmit = (task: Task) => {
    if (onSubmit) {
        onSubmit(task);
    }
};

  const handleSubmit = () => {
    const task: Task = {
      id: new Date().getTime().toString(),
      title,
      description,
      completed: false,
      createdAt: new Date(),
    };
    handleTaskSubmit(task);
    setTitle('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={title}
        placeholder="Task title"
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        value={description}
        placeholder="Task description"
        onChangeText={(text) => setDescription(text)}
      />
      <Button title="Add Task" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default TaskForm;
