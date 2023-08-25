import {FC} from 'react'
import Article from '../article/Article'
import Container from '../../../container/Container'
import { FeedArticle } from '../api/dto/global-feed.in'
import ReactPaginate from 'react-paginate'
import { PAGE_SIZE } from '../consts'

interface ArticleListProps {
  list: FeedArticle[];
}

const ArticleList:FC<ArticleListProps> = ({list}) => {
  return( 
    <div className=''>
       {list.map (article => (
        <Article key={article.slug} {...article}/>
       ))}
     
    </div>
  )
}

export default ArticleList