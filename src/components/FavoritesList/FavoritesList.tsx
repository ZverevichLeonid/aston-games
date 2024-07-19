import { useAppSelector } from '../../hooks/reduxHooks'
import { useAuth } from '../../hooks/useAuth'
import {
  selectAllFavorites,
  selectIsLoading,
} from '../../redux/store/favoritesSlice/favoritesSlice'
import { Game } from '../GamesList/Game/Game'
import { Loader } from '../Loader/Loader'
import s from './FavoriteList.module.scss'

export const FavoritesList = () => {
  const { isAuth } = useAuth()
  const favorites = useAppSelector(selectAllFavorites)
  const isLoading = useAppSelector(selectIsLoading)

  return (
    <section>
      <div className="container">
        <h1 className={s.title}>Favorites games</h1>
        <div className={s.list}>
          {isLoading && <Loader />}
          {favorites.length > 0 &&
            favorites.map(favoriteGame => {
              return (
                <Game
                  key={favoriteGame.gameId}
                  id={favoriteGame.gameId}
                  image={favoriteGame.image}
                  name={favoriteGame.name}
                  score={favoriteGame.score}
                  isAuth={isAuth}
                />
              )
            })}
          {!isLoading && favorites.length === 0 && (
            <span className={s.empty}>Favorites list is empty</span>
          )}
        </div>
      </div>
    </section>
  )
}
