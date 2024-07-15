import { Game } from './Game/Game'
import { gameApi } from '../../redux/services/gameService'
import s from './GamesList.module.scss'

const GamesList = () => {
  const { data } = gameApi.useGetPopularGamesQuery()

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
                />
              )
            })}
        </div>
      </div>
    </section>
  )
}
export default GamesList
