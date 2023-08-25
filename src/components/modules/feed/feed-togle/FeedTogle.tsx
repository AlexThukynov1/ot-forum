import {FC} from 'react'
import { NavLink } from 'react-router-dom'

interface FeedTogleProps {}

const FeedTogle: FC<FeedTogleProps> = ({}) => {
  return (
        <div className='h-[38px]'>
            <ul className='flex'>
                <li>
                    <NavLink to='' className='bg-white border-b-2 border-logo-green py-2 px-4'>Global feed</NavLink>
                </li>
            </ul>
        </div>
  )
}

export default FeedTogle