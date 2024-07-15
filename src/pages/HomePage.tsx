import { lazy, Suspense } from 'react'
import { Header } from '../components/Header/Header'
import { GameListSkeleton } from '../components/GameListSkeleton/GameListSkeleton.tsx'

const GamesListLazy = lazy(() => import('../components/GamesList/GamesList'))
export const HomePage = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<GameListSkeleton />}>
        <GamesListLazy />
      </Suspense>
    </>
  )
}
