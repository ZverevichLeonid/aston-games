import { Link } from 'react-router-dom'
import s from './SearchResult.module.scss'
import { useContext } from 'react'
import { ThemeContext } from '../../ThemeProvider/ThemeProvider'

interface SearchResultProps {
  id: number
  name: string
}

export const SearchResult = ({ id, name }: SearchResultProps) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Link
      className={theme === 'light' ? s.link : s.linkDark}
      to={`/game/${id}`}
      key={id}
    >
      {name}
    </Link>
  )
}
