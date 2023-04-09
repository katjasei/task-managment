import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TaskScreenNavigationProp} from '../../../types';
import {Task} from '../../../models';
import {addDoc, collection} from 'firebase/firestore';
import {db} from '../../../utils/firebase';


type AddTaskButtonProps = {
    navigation: TaskScreenNavigationProp;
    onSubmit: (task: Task) => void
  }


const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    backgroundColor: '#007bff',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
});

const AddTaskButton = ({navigation, onSubmit} : AddTaskButtonProps) => {

 
  const handleAddTaskPress = () => {
    navigation.navigate('TaskForm', { onSubmit: onSubmit} );
  };

  return (
    <TouchableOpacity style={styles.addButton} onPress={handleAddTaskPress}>
      <AntDesign name="plus" size={24} color="white" />
    </TouchableOpacity>
  );
};

export default AddTaskButton;
