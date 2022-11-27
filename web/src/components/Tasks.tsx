import { useEffect, useState } from 'react';
import { StatusCheck } from './StatusCheck';
import { TextTask } from './TextTask';

export interface TasksProps {
    taskList: [{
        id: string,
        name: string,
        status: boolean,
    }]
}

export function TaskList(props: TasksProps) {

    const tasks = props.taskList;
    
    const listTasks = tasks.map((tasks) => 
        <li 
            className='
                flex
                h-16 w-542 mt-1
                bg-blue-deep 
                text-gra
                border-solid 
                border-2 
                border-gray-700 
                rounded-md ' 
            key={tasks.id}>

            <StatusCheck status={tasks.status} id={tasks.id}/>

            <TextTask  name={tasks.name} status={tasks.status}/>

        </li>   
    );

    return (
        <ul>{listTasks}</ul>
    );   
  }

