import {FC} from 'react'
import TagList from '../tag-list/TagList'


interface TagCloudProps {}

const TagCloud: FC<TagCloudProps> = ({}) => {
  return (
    <div className='bg-logo-tag-cloud-bg p-3 pt-1.5'>
        <p className='mb-4'>Popular tags</p>
        <TagList list={['123', '12345']}/>
    </div>
    )
}

export default TagCloud