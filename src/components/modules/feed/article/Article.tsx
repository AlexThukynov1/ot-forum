import{FC} from 'react'
import { Link } from 'react-router-dom';
import FavoriteButton from '../favorite-button/FavoriteButton';
import TagList from './../tag-list/TagList';
import { FeedArticle } from '../api/dto/global-feed.in';
import { DateTime } from 'luxon';

interface articleProps extends FeedArticle {
    
}

const Article: FC<articleProps> = ({author,createdAt,favoritesCount,title,description, tagList}) => {
  return (
    <article>
        <div className='border-t border-black/10 py-6'>
            <div className='mb-4 font-light flex justify-between'>
                <div className='flex'>
                    <Link to={`/@${author.username}`}>
                        <img className='inline-block h-8 w-8 rounded-full' src={author.image} alt={`${author.username}`} />
                    </Link>
                    <div className='mr-6 ml-m03 leading-4 inline-flex flex-col'>
                        <Link to={`/@${author.username}`} className='font-medium'>{author.username}</Link>
                        <span className='text-logo-gray text-date'>{DateTime.fromISO(createdAt).toLocaleString(DateTime.DATE_FULL)}</span>
                    </div>
                </div>
                <FavoriteButton count={favoritesCount}/>
            </div>
            <Link to='/article/qwert' className='hover:no-underline'>
                <h1 className='mb-1 font-semibold text-2xl text-logo-black'>{title}</h1>
                <p className='text-light-black font-light mb-1'>{description}</p>
               <div className='flex justify-between'>
                    <span className='text-gray text-date font-light'>Read more...</span>
                    <TagList list={tagList}/>
               </div>
            </Link>
        </div>
    </article>
  )
}

export default Article