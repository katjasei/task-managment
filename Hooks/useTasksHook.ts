import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../utils/firebase';
import { FirestoreTask } from '../models';



const useTasks = () => {
  const [tasks, setTasks] = useState<FirestoreTask[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'tasks'), (snapshot) => {
      const tasksData: FirestoreTask[] = [];
      snapshot.forEach((doc) => {
        tasksData.push({ id: doc.id, ...doc.data() } as FirestoreTask);
      });
      setTasks(tasksData);
      setLoading(false);
    }, (error: any) => {
      setError(error.message);
    });
    return unsubscribe;
  }, []);

  const loadTasks = async () => {
    const tasksCollection = collection(db, "tasks");
    const tasksSnapshot = await getDocs(tasksCollection);
    const tasksList = tasksSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return tasksList;
  };

  return { tasks, loading, error, loadTasks };
};

export default useTasks;
