import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../../ThemeProvider/ThemeProvider'
import s from './SearchResult.module.scss'

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
