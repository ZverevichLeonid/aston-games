import { Link } from 'react-router-dom'
import s from './Game.module.scss'
import { BASE_IMG_URL } from '../../../utils/urls'
import { FavoriteButton } from '../../FavoriteButton/FavoriteButton'

interface GameProps {
  name: string
  image: string
  score: string
  id: string
}

export const Game = ({ name, image, score, id }: GameProps) => {
  return (
    <article className={s.gameCard}>
      <Link to={`/game/${id}`}>
        <img src={`${BASE_IMG_URL}${image}`} alt={`${name} image`} />
        <p className={s.score}>{score}</p>
        <h3 className={s.gameName}>{name}</h3>
      </Link>
      <FavoriteButton gameId={id} image={image} name={name} score={score} />
    </article>
  )
}
