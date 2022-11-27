import { useEffect, useState } from 'react';
import { api } from '../lib/axios';

export interface TextTask {
   name: string,
   status: boolean
}

export function TextTask(props: TextTask ) {
    const [ textDecoration, setTextDecoration] = useState(true);

    useEffect(() => {
        setTextDecoration(props.status)
    })
    


    return (
       <div 
            style={{ 
                textDecorationLine: !textDecoration ? 'line-through': 'none', 
                color: !props.status? '#6C6E83' : 'white'  
            }} 
            className='ml-6 mt-4' >{props.name}
        </div>
    )
}