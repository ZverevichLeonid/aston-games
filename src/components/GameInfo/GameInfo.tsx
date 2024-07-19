import { TransformedSingleGameData } from '../../types/types'
import { BASE_IMG_URL } from '../../utils/urls'
import { FavoriteButton } from '../FavoriteButton/FavoriteButton'
import { useAuth } from '../../hooks/useAuth'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeProvider/ThemeProvider'
import s from './GameInfo.module.scss'

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
  const { theme } = useContext(ThemeContext)

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
          <div className={theme === 'light' ? s.gameInfo : s.gameInfoDark}>
            <div className={s.gameInfoLeft}>
              <h1 className={s.gameInfoTitle}>{name}</h1>
              <p className={s.gameCompanies}>
                {companies.map((company, index) => {
                  return <span key={index}>{company.name}</span>
                })}
              </p>
              <p className={s.gameRealeseDate}>
                <span>Realese Date: {firstReleaseDate}</span>
                {platforms.map((platform, index) => {
                  return <span key={index}>{platform.name}</span>
                })}
              </p>
            </div>
            <div className={s.gameInfoRight}>
              <p className={s.gameInfoBlock}>
                <span
                  className={
                    theme === 'light'
                      ? s.gameInfoBlockValue
                      : s.gameInfoBlockValueDark
                  }
                >
                  {topCriticScore}
                </span>
                <span>Top Critic Average</span>
              </p>
              <p className={s.gameInfoBlock}>
                <span
                  className={
                    theme === 'light'
                      ? s.gameInfoBlockValue
                      : s.gameInfoBlockValueDark
                  }
                >
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
