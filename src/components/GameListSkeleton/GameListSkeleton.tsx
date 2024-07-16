import { GameSkeleton } from './GameSkeleton/GameSkeleton'
import s from './GameListSkeleton.module.scss'

export const GameListSkeleton = () => {
  return (
    <section>
      <div className="container">
        <h1 className={s.gameListTitle}>Popular Games</h1>
        <span className={s.gameListSubTitle}>
          Don't miss the most popular games on OpenCritic today
        </span>
        <div className={s.gameList}>
          {Array(18)
            .fill(0)
            .map((_, index) => {
              return <GameSkeleton key={index} />
            })}
        </div>
      </div>
    </section>
  )
}
