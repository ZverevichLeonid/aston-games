import { SearchSingleItem } from './SearchSingleItem/SearchSingleItem'
import type { RawSearchedGames } from '../../types/types'
import s from './SearchList.module.scss'

interface SearchListProps {
  data: RawSearchedGames[]
}

export const SearchList = ({ data }: SearchListProps) => {
  return (
    <section>
      <div className="container">
        <h1 className={s.title}>Search results</h1>
        <div className={s.list}>
          {data.map(game => {
            return (
              <SearchSingleItem key={game.id} id={game.id} name={game.name} />
            )
          })}
        </div>
      </div>
    </section>
  )
}
