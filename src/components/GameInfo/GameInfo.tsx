import s from './GameInfo.module.scss'
import { transformedSingleGameData } from '../../types/types'

type GameInfoProps = transformedSingleGameData

// У меня в апишке много данных приходит, я трансформировал и оставил только самые важные, как правильно типы записать?
// Эти типы нужны и в функциях, и в редаксе, и здесь в пропсах. Видел совет, что типы пропсов надо держать в компоненте,
// Но тогда их придётся экспортировать из этого компонента, что не очень хорошо, наверно.

export const GameInfo = ({
  companies,
  firstReleaseDate,
  image,
  name,
  percentRecommended,
  platforms,
  topCriticScore,
}: GameInfoProps) => {
  const BASE_URL = 'https://img.opencritic.com/'

  return (
    <section>
      <div className="container">
        <div className="">
          <img
            className={s.gameImg}
            src={`${BASE_URL}${image}`}
            alt={`${name} image`}
          />
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
