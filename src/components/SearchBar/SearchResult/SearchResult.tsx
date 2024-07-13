import { Link } from 'react-router-dom'
import s from './SearchResult.module.scss'

interface SearchResultProps {
  id: number
  name: string
}

export const SearchResult = ({ id, name }: SearchResultProps) => {
  return (
    <Link className={s.link} to={`/game/${id}`} key={id}>
      {name}
    </Link>
  )
}
