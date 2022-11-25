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
        <li className='
                flex
                h-16 w-542 mt-1
                bg-blue-deep 
                text-gra
                border-solid 
                border-2 
                border-gray-700 
                rounded-md ' 
            key={tasks.id}>

            <StatusCheck status={tasks.status}/>

            <div style={{ 
                    textDecorationLine: !tasks.status? 'line-through': 'none', 
                    color: !tasks.status? '#6C6E83' : 'white'  
                }} 
                className='ml-6 mt-4' >{tasks.name}
            </div>
        </li>
    );
    return (
      <ul>{listTasks}</ul>
    );
  }