import { Link } from 'react-router-dom'
import { BASE_IMG_URL } from '../../../utils/urls'
import { FavoriteButton } from '../../FavoriteButton/FavoriteButton'
import PropTypes from 'prop-types'
import s from './Game.module.scss'

interface GameProps {
  name: string
  image: string
  score: string
  id: string
  isAuth: boolean
}

export const Game = ({ name, image, score, id, isAuth }: GameProps) => {
  return (
    <article className={s.gameCard}>
      <Link to={`/game/${id}`}>
        <img
          className={s.img}
          src={`${BASE_IMG_URL}${image}`}
          alt={`${name} image`}
        />
        <p className={s.score}>{score}</p>
        <h3 className={s.gameName}>{name}</h3>
      </Link>
      {isAuth && (
        <FavoriteButton gameId={id} image={image} name={name} score={score} />
      )}
    </article>
  )
}

Game.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
