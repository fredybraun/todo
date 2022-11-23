export interface FooterLinksProps {
  tasks: number,  
}

export function FooterLinks (props: FooterLinksProps) {
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
      <a href='#' className='text-gray-500'>{props.tasks} items left</a>
      <a href='#' className='text-gray-500'>All Activite Complete</a>
      <a href='#' className='text-gray-500'>Clear completed</a>
    </div>
  )
}










