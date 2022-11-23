
import { api } from '../lib/axios';


interface HomeProps {
tasks: number;
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
            <ul>
              {props.taskList.map( (tasks) => {
                return (
                <a  href={tasks.id}>
                  <li className='
                    h-16 w-542 mt-1
                    bg-blue-deep 
                    border-solid 
                    border-2 
                    border-gray-700 
                    rounded-md 
                    ' key={tasks.id}>
                     <input type='checkbox' className='h-4 w-4'  />
                      {tasks.name}
                  </li>
                </a>);
              })}
            </ul> 
          </div>
          <div>
            <a href='#' className='text-gray-500'>{props.tasks} items left</a>
            <a href='#' className='text-gray-500'>All Activite Complete</a>
            <a href='#' className='text-gray-500'>Clear completed</a>
          </div>
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
