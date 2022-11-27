import { useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface FooterLinksProps {
  tasks: string,  
}

export function FooterLinks (props: FooterLinksProps) {
  const [ tasksNumber, setTasksNumber ] = useState('');

  useEffect(() => {
    setTasksNumber(props.tasks);
  })
  
  async function deleteTasks() {
    
    try {
        await api.delete('/tasks/delete', {
        }); 

    } catch (error) {
        console.error(error);
        alert('Fail to change task!');
    }  
  }

  return (
    <div className='flex 
    justify-center 
    gap-36 
    h-16 w-542 
    mt-1 pt-5
    bg-blue-deep 
    border-solid 
    border-2 
    border-gray-700 
    rounded-md '>
      <a href='#' className='text-gray-500'>{tasksNumber} items left</a>
      <a href='#' className='text-gray-500'>All Activite Complete</a>
      <a onClick={deleteTasks} href='http://localhost:3000' className='text-gray-500'>Clear completed</a>
    </div>
  )
}










