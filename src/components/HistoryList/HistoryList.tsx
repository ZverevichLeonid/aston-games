import { getHistory } from '../../redux/store/historySlice/historySlice'
import { useAuth } from '../../hooks/useAuth'
import { useEffect } from 'react'
import { HistorySingleItem } from './HistorySingleItem/HistorySingleItem'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { useAppSelector } from '../../hooks/reduxHooks'
import s from './HistoryList.module.scss'

export const HistoryList = () => {
  const { id } = useAuth()
  const history = useAppSelector(state => state.history.history)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getHistory({ id: id! }))
  }, [id, dispatch])

  return (
    history && (
      <section>
        <div className="container">
          <h1 className={s.title}>Search history</h1>
          <div className={s.list}>
            {history.map(url => {
              return <HistorySingleItem key={url} url={url} id={id!} />
            })}
          </div>
        </div>
      </section>
    )
  )
}
