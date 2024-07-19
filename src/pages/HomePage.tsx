import { lazy, Suspense, useEffect } from 'react'
import { Header } from '../components/Header/Header'
import { GameListSkeleton } from '../components/GameListSkeleton/GameListSkeleton.tsx'
import { useAppDispatch } from '../hooks/reduxHooks.ts'
import { getFavorites } from '../redux/store/favoritesSlice/favoritesSlice.tsx'

const GamesListLazy = lazy(() => import('../components/GamesList/GamesList'))

export const HomePage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getFavorites())
  }, [dispatch])

  return (
    <>
      <Header />
      <Suspense fallback={<GameListSkeleton />}>
        <GamesListLazy />
      </Suspense>
    </>
  )
}
