import { useContext, useRef, useState } from 'react'
import { SearchDropDown } from './SearchDropDown/SearchDropDown'
import { useDebounce } from 'use-debounce'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { addUrlToHistory } from '../../redux/store/historySlice/historySlice'
import { useAuth } from '../../hooks/useAuth'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { ThemeContext } from '../ThemeProvider/ThemeProvider'
import searchImg from '../../assets/search-img1.png'
import s from './SearchBar.module.scss'

export const SearchBar = () => {
  const [isShow, setIsShow] = useState(false)
  const [searchParams] = useSearchParams()
  const [inputValue, setInputValue] = useState(searchParams.get('query') || '')
  const [queryParams] = useDebounce(inputValue, 500)
  const { isAuth } = useAuth()
  const { theme } = useContext(ThemeContext)
  const inputRef = useRef<HTMLInputElement>(null)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  function onBlurHandler() {
    setTimeout(() => {
      setIsShow(false)
    }, 100)
  }
  function onFocusHandler() {
    setIsShow(true)
  }

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value)
  }

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (inputValue.length > 0) {
      if (isAuth) {
        dispatch(addUrlToHistory({ url: inputValue }))
      }
      navigate(`/search?query=${inputValue}`)
    }
    if (inputRef) {
      inputRef.current?.focus()
    }
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={s.row}>
        <div className={s.suggest}>
          <input
            className={theme === 'light' ? s.input : s.inputDark}
            value={inputValue}
            onChange={handleChangeInput}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            ref={inputRef}
            placeholder="Search game..."
            type="text"
          />

          <SearchDropDown queryParams={queryParams} isShow={isShow} />
        </div>
        <button className={s.btn} type="submit">
          <img src={searchImg} alt="Search button" />
        </button>
      </div>
    </form>
  )
}
