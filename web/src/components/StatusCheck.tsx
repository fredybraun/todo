export interface StatusCheck {
   status: boolean,
}

export function StatusCheck(props: StatusCheck ) {

    

    return (
        <input type='checkbox' checked={props.status} className='
            ml-4 mt-4
            form-check-input 
            appearance-none 
            h-6 w-6 border 
            border-gray-700 
            rounded-full 
            bg-blue-deep 
            checked:bg-blue-button 
            checked:border-gray-700' 
        />
    )
}