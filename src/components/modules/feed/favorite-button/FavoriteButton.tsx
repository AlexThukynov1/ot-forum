import {FC} from 'react'


interface FavoriteButtonProps {
  count: number
}

const FavoriteButton: FC<FavoriteButtonProps> = ({count}) => {
  return(
    <button className='text-logo-green border-logo-green text-center align-middle cursor-pointer select-none border px-2 py-1 text-sm rounded-btn-sm hover:text-white hover:bg-logo-green focus:bg-logo-darkGreen'>
      <i className='ion-heart'></i>
      <span className='ml-1 font-normal' >{count}</span>
    </button>
  )
}

export default FavoriteButton