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
  const dispatch = useAppDispatch()

  const isFavorite = useAppSelector(state =>
    selectGameIsFavorite(state, gameId),
  )

  const isLoading = useAppSelector(selectIsLoading)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    if (isFavorite) {
      dispatch(deleteGameFromFavorites({ gameId, image, name, score }))
    } else {
      dispatch(addGameToFavorites({ gameId, image, name, score }))
    }
  }

  return (
    <button onClick={handleClick} disabled={isLoading} className={s.box}>
      <img
        className={s.img}
        src={isFavorite ? btnActive : btnNonActive}
        alt="favorite toggle button"
      />
    </button>
  )
}
