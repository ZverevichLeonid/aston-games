import { useEffect } from 'react'
import { FavoritesList } from '../components/FavoritesList/FavoritesList'
import { Header } from '../components/Header/Header'
import { useAppDispatch } from '../hooks/reduxHooks'
import { getFavorites } from '../redux/store/favoritesSlice/favoritesSlice'

export const FavoritesPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getFavorites())
  }, [dispatch])

  return (
    <>
      <Header />
      <FavoritesList />
    </>
  )
}
