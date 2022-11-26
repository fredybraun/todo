import { api } from '../lib/axios';

export interface StatusCheck {
   status: boolean,
   id: string
}

export function StatusCheck(props: StatusCheck ) {

    async function udateTask() {
        
        try {
            await api.put(`/tasks/update/${props.id}`, {
            }); 

        } catch (error) {
            console.error(error);
            alert('Fail to change task!');
        } 
    }

    return (
        <input 
            type='checkbox' 
            defaultChecked={!props.status} 
            className='
                ml-4 mt-4
                form-check-input 
                appearance-none 
                h-6 w-6 border 
                border-gray-700 
                rounded-full 
                bg-blue-deep 
                checked:bg-blue-button 
                checked:border-gray-700' 
            onClick={udateTask}    
        />
    )
}