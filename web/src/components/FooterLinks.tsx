export interface FooterLinksProps {
  tasks: number,  
}

export function FooterLinks (props: FooterLinksProps) {
  return (
    <div className='flex justify-center gap-36'>
      <a href='#' className='text-gray-500'>{props.tasks} items left</a>
      <a href='#' className='text-gray-500'>All Activite Complete</a>
      <a href='#' className='text-gray-500'>Clear completed</a>
    </div>
  )
}










