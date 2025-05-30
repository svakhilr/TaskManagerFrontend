import React from 'react'
import TaskTable from '../components/table'
import Layout from '../common/layout'
import TaskStats from '../components/taskstat';
import { useEffect, useState } from 'react';
import requests from '../common/requests';

function Dashboard() {


  const [tasks, setTasks] = useState([]);
  const [taskstat, setTaskstat] = useState({})
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const accessToken = localStorage.getItem('access');
        const response = await fetch(requests.getTasks, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    const fetchTaskCount = async ()=>{
      try {
        const accessToken = localStorage.getItem('access');
        const response = await fetch(requests.getTasksCount, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setTaskstat(data)
        console.log("count",data)
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    }

    fetchTasks();
    fetchTaskCount();
  }, []);
  console.log(tasks)

  return (
    <Layout>
    <section className="bg-gray-900 min-h-screen p-6">
    <TaskStats taskstat={taskstat}  />
      <TaskTable tasks={tasks} />
    </section>
    </Layout>
  )
}

export default Dashboard