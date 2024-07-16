import { useParams } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { GameInfo } from '../components/GameInfo/GameInfo'
import { gameApi } from '../redux/services/gameService'
import { Loader } from '../components/Loader/Loader'

export const GamePage = () => {
  const { gameId } = useParams()
  const { data, isLoading } = gameApi.useGetGameInfoQuery(gameId!)

  return (
    <>
      <Header />
      {!isLoading ? <GameInfo {...data!} /> : <Loader />}
    </>
  )
}
