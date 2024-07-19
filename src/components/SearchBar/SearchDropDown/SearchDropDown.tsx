import { SearchResult } from '../SearchResult/SearchResult'
import { gameApi } from '../../../redux/services/gameService'
import { useContext } from 'react'
import { ThemeContext } from '../../ThemeProvider/ThemeProvider'
import classNames from 'classnames'
import s from './SearchDropDown.module.scss'

interface SearchDropDownProps {
  queryParams: string
  isShow: boolean
}

export const SearchDropDown = ({
  queryParams,
  isShow,
}: SearchDropDownProps) => {
  const { data } = gameApi.useGetGameSearchQuery(queryParams, {
    skip: queryParams.length === 0,
  })

  const { theme } = useContext(ThemeContext)

  const suggestClass = classNames({
    [s.active]: isShow && data,
    [s.suggestData]: theme === 'light',
    [s.suggestDataDark]: theme === 'dark',
  })

  return (
    <div className={suggestClass}>
      {data &&
        data.map(game => {
          return <SearchResult key={game.id} {...game} />
        })}
    </div>
  )
}
