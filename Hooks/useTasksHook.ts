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


  return { tasks, loading, error };
};

export default useTasks;
