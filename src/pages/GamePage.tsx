import { useParams } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { GameInfo } from '../components/GameInfo/GameInfo'
import { gameApi } from '../redux/services/gameService'

export const GamePage = () => {
  const { gameId } = useParams()
  const { data } = gameApi.useGetGameInfoQuery(gameId ?? '') // Нормальная запись, учитывая, что  gameId =  string | undefined ?

  return (
    <>
      <Header />
      {/* Доделаю позже */}
      {data && <GameInfo {...data} />}
    </>
  )
}
