import { FormEvent, useState } from 'react';

import { TaskList } from '../components/Tasks';
import { FooterLinks }  from '../components/FooterLinks';

import { api } from '../lib/axios';


interface HomeProps {
tasks: number,
taskList: [{
  id: string,
  name: string,
  status: boolean,
}]
}


export default function Home(props: HomeProps) {
  const [taskTitle, setTaskTitle] = useState('');

  async function createTask(event: FormEvent) {
    event.preventDefault();

    try {
      api.post('/tasks', {
        name: taskTitle,
      }); 
    } catch (error) {
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
                  rounded-md 
                  placeholder:px-16' 
                placeholder='Create a new todo...'
                onChange={event => setTaskTitle(event.target.value)}  
                />
                

              <button 
                type='submit' 
                className='
                  h-16 w-16
                  bg-blue-button 
                  border-solid 
                  border-2 
                  border-gray-700 
                  rounded-md' >Submit
              </button>
            </form>
            


            
            <TaskList taskList={ props.taskList } />

          </div>
          <FooterLinks tasks={props.tasks}/>
        </div>
    </div>
  )
}


export const getServerSideProps =  async () => {
  const [ taskCountOpenResponse, taskListResponse ] = await Promise.all([
    api.get('/tasks/count/open'),
    api.get('/tasks'),
  ]);

  return {
    props: {
      tasks: taskCountOpenResponse.data.tasksOpen,
      taskList: taskListResponse.data.tasks
    },
  }
  
}
