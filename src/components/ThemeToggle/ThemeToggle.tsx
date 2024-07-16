import { useContext } from 'react'
import { ThemeContext } from '../ThemeProvider/ThemeProvider'
import SunIcon from '../../assets/sun-icon.png'
import MoonIcon from '../../assets/moon-icon.png'
import s from './ThemeToggle.module.scss'

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button className={s.btn} onClick={toggleTheme}>
      <img
        src={theme === 'light' ? SunIcon : MoonIcon}
        alt="toggle theme button"
      />
    </button>
  )
}
