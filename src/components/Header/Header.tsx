import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { removeUser } from '../../redux/store/userSlice/userSlice'
import headerLogo from '../../assets/logo.png'
import s from './Header.module.scss'

export const Header = () => {
  const { isAuth, signOut } = useAuth()
  const dispatch = useAppDispatch()

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.headerRow}>
          <Link className={s.headerLink} to={'/'}>
            <div className={s.headerLogo}>
              <img src={headerLogo} alt="logo link to home" />
              <span>ClosedCritic</span>
            </div>
          </Link>
          {/* Условия переделаю позже */}
          {!isAuth && (
            <Link className={s.link} to={`/singup`}>
              singUp
            </Link>
          )}
          {!isAuth && (
            <Link className={s.link} to={`/singin`}>
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
        </div>
      </div>
    </header>
  )
}
