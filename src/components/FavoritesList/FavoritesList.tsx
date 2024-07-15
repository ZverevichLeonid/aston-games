import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { useAuth } from '../../hooks/useAuth'
import { getFavorites } from '../../redux/store/favoritesSlice/favoritesSlice'
import { Game } from '../GamesList/Game/Game'
import s from './FavoriteList.module.scss'

export const FavoritesList = () => {
  const { id } = useAuth()
  const favorites = useAppSelector(state => state.favorites.favorites)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getFavorites())
  }, [id, dispatch])

  return (
    favorites && (
      <section>
        <div className="container">
          <h1 className={s.title}>Favorites games </h1>
          <div className={s.list}>
            {favorites.map(favoriteGame => {
              return (
                <Game
                  key={favoriteGame.gameId}
                  id={favoriteGame.gameId}
                  image={favoriteGame.image}
                  name={favoriteGame.name}
                  score={favoriteGame.score}
                />
              )
            })}
          </div>
        </div>
      </section>
    )
  )
}
