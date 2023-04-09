import { useState } from "react";
import { Task } from "../../models";
import { View } from "react-native";
import TaskDetails from "../TaskDetailScreen/TaskDetails";
import TaskList from "./components/TaskList";
import TaskForm from "./TaskForm";
import { app,db } from "../../utils/firebase";
import {addDoc, collection} from "firebase/firestore";

const TaskScreen = () => {
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    const handleTaskSubmit = async (task: Task) => {
        console.log(task);
        // Add your code here to submit the task to the server or to save it locally
        
        try {
            await addDoc(collection(db,'tasks'), { task: task});
            console.log('Task added successfully');
          } catch (error) {
            console.error('Error adding task: ', error);
          }
      };
  
    return (
      <View>
        {selectedTask ? (
          <TaskDetails task={selectedTask} />
        ) : (
          <TaskForm onSubmit={handleTaskSubmit} />
        )}
        <TaskList />
      </View>
    );
  };
  
  export default TaskScreen;