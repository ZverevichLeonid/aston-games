import { useParams } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { GameInfo } from '../components/GameInfo/GameInfo'
import { gameApi } from '../redux/services/gameService'
import { Loader } from '../components/Loader/Loader'
import { useAppDispatch } from '../hooks/reduxHooks'
import { useEffect } from 'react'
import { getFavorites } from '../redux/store/favoritesSlice/favoritesSlice'

export const GamePage = () => {
  const { gameId } = useParams()
  const { data, isLoading } = gameApi.useGetGameInfoQuery(gameId!)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getFavorites())
  }, [dispatch])

  return (
    <>
      <Header />
      {!isLoading ? <GameInfo {...data!} /> : <Loader />}
    </>
  )
}
