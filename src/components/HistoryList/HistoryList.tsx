import {
  getHistory,
  selectAllHistory,
} from '../../redux/store/historySlice/historySlice'
import { useAuth } from '../../hooks/useAuth'
import { useEffect } from 'react'
import { HistorySingleItem } from './HistorySingleItem/HistorySingleItem'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { useAppSelector } from '../../hooks/reduxHooks'
import s from './HistoryList.module.scss'

export const HistoryList = () => {
  const { id } = useAuth()
  const history = useAppSelector(selectAllHistory)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getHistory())
  }, [id, dispatch])

  return (
    <section>
      <div className="container">
        <h1 className={s.title}>Search history</h1>
        <div className={s.list}>
          {history.length > 0 ? (
            history.map(url => {
              return <HistorySingleItem key={url} url={url} id={id!} />
            })
          ) : (
            <span className={s.empty}>History list is empty</span>
          )}
        </div>
      </div>
    </section>
  )
}
