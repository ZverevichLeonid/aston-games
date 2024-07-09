import { Link } from 'react-router-dom'
import s from './Game.module.scss'

interface GameProps {
  name: string
  image: string
  score: string
  id: number
}

export const Game = ({ name, image, score, id }: GameProps) => {
  const BASE_URL = 'https://img.opencritic.com/'

  return (
    <article className={s.gameCard}>
      <Link to={`/game/${id}`}>
        <img src={`${BASE_URL}${image}`} alt={`${name} image`} />
        <p className={s.score}>{score}</p>
        <h3 className={s.gameName}>{name}</h3>
      </Link>
    </article>
  )
}
