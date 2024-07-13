import { SearchResult } from '../SearchResult/SearchResult'
import { gameApi } from '../../../redux/services/gameService'
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
    skip: queryParams.length <= 0,
  })

  const suggestClass = classNames(s.suggestData, {
    [s.active]: isShow && data,
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
