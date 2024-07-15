import { GameSkeleton } from './GameSkeleton/GameSkeleton'
import s from './GameListSkeleton.module.scss'

export const GameListSkeleton = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  return (
    <section>
      <div className="container">
        <h1 className={s.gameListTitle}>Popular Games</h1>
        <span className={s.gameListSubTitle}>
          Don't miss the most popular games on OpenCritic today
        </span>
        <div className={s.gameList}>
          {data.map((_, index) => {
            return <GameSkeleton key={index} />
          })}
        </div>
      </div>
    </section>
  )
}
