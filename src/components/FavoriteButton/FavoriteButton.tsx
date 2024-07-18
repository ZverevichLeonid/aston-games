import { useAppDispatch } from '../../hooks/reduxHooks'
import {
  addGameToFavorites,
  deleteGameFromFavorites,
  selectGameIsFavorite,
  selectIsLoading,
} from '../../redux/store/favoritesSlice/favoritesSlice'
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
  const isFavorite = useAppSelector(state =>
    selectGameIsFavorite(state, gameId),
  )
  const isLoading = useAppSelector(selectIsLoading)
  const dispatch = useAppDispatch()

  return (
    <button disabled={isLoading} className={s.box}>
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
    </button>
  )
}
