import { Link } from 'react-router-dom'
import headerLogo from '../../assets/logo.png'
import s from './Header.module.scss'
export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.headerRow}>
        <div className="container">
          {/*     Могу совмещать модули и простой css? Просто контейнер везде одинаковый, в каждый модуль не хочу писать  */}
          <Link className={s.headerLink} to={'/'}>
            <div className={s.headerLogo}>
              <img src={headerLogo} />
              <span>ClosedCritic</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
