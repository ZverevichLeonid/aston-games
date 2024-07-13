import { Link } from 'react-router-dom'
import s from './SearchSingleItem.module.scss'

interface SearchSingleItemProps {
  id: number
  name: string
}

export const SearchSingleItem = ({ id, name }: SearchSingleItemProps) => {
  return (
    <Link className={s.link} to={`/game/${id}`}>
      <span>{name}</span>
    </Link>
  )
}
