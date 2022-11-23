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
  return (
    <div className='flex justify-center'>
        <div className='py-20'>
          <h1 className='font-bold text-3xl tracking-largest	text-white'>TODO</h1>
          <div className='py-10'>
            <input 
              className='
                h-16 w-542 
                bg-blue-deep 
                border-solid 
                border-2 
                border-gray-700 
                rounded-md 
                placeholder:px-16 	
                ' 
              placeholder='Create a new todo...'>
            </input>
            <button></button>
            
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
