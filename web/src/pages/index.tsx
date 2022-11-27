import { FormEvent, useState, useEffect } from 'react';

import { TaskList } from '../components/Tasks';
import { FooterLinks }  from '../components/FooterLinks';

import { api } from '../lib/axios';

interface taskProps {
  tasks: string,
}

interface tasksProps {
  taskList: {
    id: string,
    name: string,
    status: boolean,
  }
}

export default function Home(props: [  taskProps, tasksProps ]
) {
  const [ taskTitle, setTaskTitle ] = useState('');
  const [ taskCount, setTaskCount ] = useState('0');
  const [ taskContent, setTaskContent ] = useState<tasksProps[]>([]);
  
  useEffect(() => {
    getTasks()
    getTasksCount() 
  },[taskTitle])

  async function getTasks() {
  try {
    const response = await api.get('/tasks');
    setTaskContent(response.data.tasks);  
  } catch (error) {
    console.error(error);
  }
  }

  async function getTasksCount() {
    try {
      const response = await api.get('/tasks/count/open');
      setTaskCount(response.data.tasksOpen);
      
    } catch (error) {
      console.error(error);
    }
  }

  async function createTask(event: FormEvent) {
    event.preventDefault();
    
    try {
      const response = await api.post('/tasks', {
        name: taskTitle,
      }); 

      setTaskTitle('');

    } catch (error) {
      console.error(error);
      alert('Fail to create task!');
    } 
  }
  
  return (
    <div className='flex justify-center'>
        <div className='py-20'>
          <h1 className='font-bold text-3xl tracking-largest	text-white'>TODO</h1>
          <div className='py-10'>
            <form onSubmit={createTask}>
              <input 
                className='
                  h-16 w-526
                  pl-16
                  text-white
                  bg-blue-deep 
                  border-solid 
                  border-2 
                  border-gray-700 
                  rounded-md ' 
                placeholder='Create a new todo...'
                onChange={event => setTaskTitle(event.target.value)}
                value={taskTitle}  
                />
                
              <button 
                type='submit' 
                className='
                  h-16 w-16
                  bg-blue-button 
                  border-solid 
                  border-2 
                  border-gray-700 
                  rounded-md'
                  onClick={getTasksCount}
                  >Submit
              </button>
            </form>
 
            <TaskList taskList={taskContent}/>

          </div>

          <FooterLinks tasks={taskCount}/>
        
        </div>
    </div>
  )
}
  