import { useEffect, useState } from 'react'
import { SearchResult } from '../SearchResult/SearchResult'
import { gameApi } from '../../../redux/services/gameService'
import s from './SearchDropDown.module.scss'

interface SearchDropDownProps {
  queryParams: string
  isShow: boolean
}

export const SearchDropDown = ({
  queryParams,
  isShow,
}: SearchDropDownProps) => {
  const [isSkip, setIsSkip] = useState(true)

  useEffect(() => {
    if (queryParams.length > 0) {
      setIsSkip(false)
    }
  }, [queryParams])

  const { data } = gameApi.useGetGameSearchQuery(queryParams, {
    skip: isSkip,
  })

  const suggestClasses = () => {
    if (isShow && data && data.length > 0) {
      return `${s.suggestData} ${s.active}`
    } else {
      return `${s.suggestData}`
    }
  }

  return (
    <div className={suggestClasses()}>
      {data &&
        data.map(game => {
          return <SearchResult key={game.id} {...game} />
        })}
    </div>
  )
}
