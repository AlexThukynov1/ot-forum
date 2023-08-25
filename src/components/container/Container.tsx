import {FC, PropsWithChildren} from 'react'

interface containerProps {}

const Container:FC<PropsWithChildren<containerProps>> = ({children}) => {
  return <div className='container mx-auto'>
    {children}
  </div>
}

export default Container