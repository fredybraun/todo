import Image  from 'next/image'

interface HomeProps {
tasks: number;
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
              <li>asd</li>
              <li>asd</li>
              <li>asd</li>
              <li>asd</li>
            </ul> 
          </div>
          <div>
            <a href='#' className='text-gray-500'>5 items left</a>
            <a href='#' className='text-gray-500'>All Activite Complete</a>
            <a href='#' className='text-gray-500'>Clear completed</a>
          </div>
        </div>
    </div>
  )
}


// export const getServerSideProps =  async () => {
//   const response = await fetch('http://localhost:3333/tasks/count/open');
//   const data = await response.json();

//   return {
//     props: {
//       tasks: data.tasksOpen
//     }
//   }
// }
