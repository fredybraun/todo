import { StatusCheck } from './StatusCheck';

export interface TaskProps {
    taskList: [{
        id: string,
        name: string,
        status: boolean,
    }]
}


export function TaskList(props: TaskProps) {
    const tasks = props.taskList;
    const listTasks = tasks.map((tasks) =>
    <a  href={tasks.id}>
        <li className='
            flex
            h-16 w-542 mt-1
            bg-blue-deep 
            border-solid 
            border-2 
            border-gray-700 
            rounded-md 
            ' key={tasks.id}>

            <StatusCheck status={tasks.status}/>

            <div className='ml-6 mt-4 text-white'>{tasks.name}</div>
        </li>
    </a>
    );
    return (
      <ul>{listTasks}</ul>
    );
  }