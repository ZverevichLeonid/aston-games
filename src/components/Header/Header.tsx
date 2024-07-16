import { Link } from 'react-router-dom'
import { SearchBar } from '../SearchBar/SearchBar'
import { useAuth } from '../../hooks/useAuth'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { removeUser } from '../../redux/store/userSlice/userSlice'
import headerLogo from '../../assets/logo.png'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import s from './Header.module.scss'

export const Header = () => {
  const { isAuth, signOut } = useAuth()
  const dispatch = useAppDispatch()

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.headerRow}>
          <div className={s.boxLogo}>
            <Link className={s.headerLink} to={'/'}>
              <div className={s.headerLogo}>
                <img src={headerLogo} alt="logo link to home" />
                <span>ClosedCritic</span>
              </div>
            </Link>
            <ThemeToggle />{' '}
          </div>
          {isAuth && (
            <Link className={s.link} to={`/history`}>
              History
            </Link>
          )}
          {isAuth && (
            <Link className={s.link} to={`/favorites`}>
              Favorites
            </Link>
          )}
          {!isAuth && (
            <Link className={s.link} to={`/signup`}>
              singUp
            </Link>
          )}
          {!isAuth && (
            <Link className={s.link} to={`/signin`}>
              singIn
            </Link>
          )}
          {isAuth && (
            <span
              className={s.link}
              onClick={() => {
                dispatch(removeUser())
                signOut()
              }}
            >
              LogOut
            </span>
          )}
          <SearchBar />
        </div>
      </div>
    </header>
  )
}
