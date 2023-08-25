import {FC} from 'react'

enum TagListStyle {
  DARK = 'dark',
  LIGHT = 'light'
}

interface TagListProps {
  list: string[];
  style?: TagListStyle
}

const TagList: FC<TagListProps> = ({list}) => {
  return (
        <ul className='flex gap-1'>
          {
            list.map((tag) => {
              return <li className='font-light text-date border border-logo-light-gray text-logo-semi-gray mb-02 px-06 rounded-tag' key={tag}>{tag}</li>
            })
          }
        </ul>
  )
}

export default TagList