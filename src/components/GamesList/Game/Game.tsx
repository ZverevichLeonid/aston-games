import s from './Game.module.scss'
interface GameProps {
  name: string
  image: string
  score: number
}
export const Game = ({ name, image, score }: GameProps) => {
  return (
    <article className={s.gameCard}>
      <img src={`https://img.opencritic.com/${image}`} alt="" />
      <p className={s.score}>{score.toFixed()}</p>
      <h3 className={s.gameName}>{name}</h3>
    </article>
  )
}
