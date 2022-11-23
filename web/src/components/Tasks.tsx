
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
  </a>
    );
    return (
      <ul>{listTasks}</ul>
    );
  }