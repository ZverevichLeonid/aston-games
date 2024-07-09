import { useParams } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { GameInfo } from '../components/GameInfo/GameInfo'
import { gameApi } from '../redux/services/gameService'

export const GamePage = () => {
  const { gameId } = useParams()
  const { data } = gameId
    ? gameApi.useGetGameInfoQuery(gameId)
    : { data: undefined }

  return (
    <>
      <Header />
      {data && <GameInfo {...data} />}
    </>
  )
}
