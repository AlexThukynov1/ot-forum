import {FC} from 'react'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Feed from './components/modules/feed/feed/Feed'

interface Props {}

const App: FC<Props> = ({}) => {
  return ( 
    <div>
        <Header/>
        <Banner/>
        <Feed/>
    </div>
  )
}

export default App