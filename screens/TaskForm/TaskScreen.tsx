import { useState } from "react";
import { Task } from "../../models";
import { View } from "react-native";
import TaskDetails from "./components/TaskDetails";
import TaskList from "./components/TaskList";
import TaskForm from "./TaskForm";

const TaskScreen = () => {
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    const handleTaskSubmit = (task: Task) => {
        console.log(task);
        // Add your code here to submit the task to the server or to save it locally
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