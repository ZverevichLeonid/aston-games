import { Game } from './Game/Game'
import { gameApi } from '../../redux/services/gameService'
import { useAuth } from '../../hooks/useAuth'
import s from './GamesList.module.scss'

const GamesList = () => {
  const { data } = gameApi.useGetPopularGamesQuery()
  const { isAuth } = useAuth()

  return (
    <section>
      <div className="container">
        <h1 className={s.gameListTitle}>Popular Games</h1>
        <span className={s.gameListSubTitle}>
          Don't miss the most popular games on OpenCritic today
        </span>
        <div className={s.gameList}>
          {data &&
            data.map(game => {
              return (
                <Game
                  key={game.name}
                  name={game.name}
                  image={game.image}
                  score={game.score}
                  id={game.id}
                  isAuth={isAuth}
                />
              )
            })}
        </div>
      </div>
    </section>
  )
}
export default GamesList
