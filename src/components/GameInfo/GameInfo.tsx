import s from './GameInfo.module.scss'
import { TransformedSingleGameData } from '../../types/types'
import { BASE_IMG_URL } from '../../utils/urls'
import { FavoriteButton } from '../FavoriteButton/FavoriteButton'
import { useAuth } from '../../hooks/useAuth'

type GameInfoProps = TransformedSingleGameData

export const GameInfo = ({
  id,
  companies,
  firstReleaseDate,
  image,
  name,
  percentRecommended,
  platforms,
  topCriticScore,
}: GameInfoProps) => {
  const { isAuth } = useAuth()
  return (
    <section>
      <div className="container">
        <div className={s.gameBox}>
          <img
            className={s.gameImg}
            src={`${BASE_IMG_URL}${image}`}
            alt={`${name} image`}
          />
          {isAuth && (
            <FavoriteButton
              gameId={id}
              image={image}
              name={name}
              score={topCriticScore}
            />
          )}
          <div className={s.gameInfo}>
            <div className={s.gameInfoLeft}>
              <h1 className={s.gameInfoTitle}>{name}</h1>
              <p className={s.gameCompanies}>
                {companies.map(company => {
                  return <span key={company.name}>{company.name}</span>
                })}
              </p>
              <p className={s.gameRealeseDate}>
                <span>Realese Date: {firstReleaseDate}</span>
                {platforms.map(platform => {
                  return <span key={platform.name}>{platform.name}</span>
                })}
              </p>
            </div>
            <div className={s.gameInfoRight}>
              <p className={s.gameInfoBlock}>
                <span className={s.gameInfoBlockValue}>{topCriticScore}</span>
                <span>Top Critic Average</span>
              </p>
              <p className={s.gameInfoBlock}>
                <span className={s.gameInfoBlockValue}>
                  {percentRecommended}%
                </span>
                <span>Critics Recommend</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
