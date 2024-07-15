import s from './GameSkeleton.module.scss'

export const GameSkeleton = () => {
  return (
    <article className={s.gameCard}>
      <div className={s.img} />
      <h3 className={s.gameName}></h3>
    </article>
  )
}
