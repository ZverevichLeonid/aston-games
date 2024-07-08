import s from './Header.module.scss'
import headerLogo from '../../assets/logo.png'
export const Header = () => {
  return (
    <header>
      <div className={s.headerRow}>
        <div className="container">
          {/*     Могу совмещать модули и простой css? Просто контейнер везде одинаковый, в каждый модуль не хочу писать  */}
          <div className={s.headerLogo}>
            <img src={headerLogo} />
            <span>ClosedCritic</span>
          </div>
        </div>
      </div>
    </header>
  )
}
