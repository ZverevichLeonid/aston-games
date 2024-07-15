import { useAppDispatch } from '../../hooks/reduxHooks'
import {
  addGameToFavorites,
  deleteGameFromFavorites,
} from '../../redux/store/favoritesSlice/favoritesSlice'
import { useAuth } from '../../hooks/useAuth'
import { useAppSelector } from '../../hooks/reduxHooks'
import btnActive from '../../assets/btn-active.png'
import btnNonActive from '../../assets/btn-non-active.png'
import s from './FavoriteButton.module.scss'

interface FavoriteButtonProps {
  gameId: string
  image: string
  name: string
  score: string
}

export const FavoriteButton = ({
  gameId,
  image,
  name,
  score,
}: FavoriteButtonProps) => {
  const { isAuth } = useAuth()
  const favorites = useAppSelector(state => state.favorites.favorites)
  const isFavorite = favorites.some(game => game.gameId == gameId)
  const dispatch = useAppDispatch()

  return isAuth ? (
    <div className={s.box}>
      <img
        className={s.img}
        src={isFavorite ? btnActive : btnNonActive}
        onClick={e => {
          e.stopPropagation()
          if (isFavorite) {
            dispatch(deleteGameFromFavorites({ gameId, image, name, score }))
          } else {
            dispatch(addGameToFavorites({ gameId, image, name, score }))
          }
        }}
        alt="favorite button"
      />
    </div>
  ) : null
}
