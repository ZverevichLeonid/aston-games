import {
  getHistory,
  selectAllHistory,
} from '../../redux/store/historySlice/historySlice'
import { useAuth } from '../../hooks/useAuth'
import { useEffect } from 'react'
import { HistorySingleItem } from './HistorySingleItem/HistorySingleItem'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { useAppSelector } from '../../hooks/reduxHooks'
import { FixedSizeList as List } from 'react-window'
import s from './HistoryList.module.scss'

export const HistoryList = () => {
  const { id } = useAuth()
  const history = useAppSelector(selectAllHistory)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getHistory())
  }, [dispatch])

  return (
    <section>
      <div className="container">
        <h1 className={s.title}>Search history</h1>
        <div>
          {history.length > 0 ? (
            <List
              itemData={{ history: history, id: id! }}
              itemSize={53}
              width={1100}
              height={250}
              itemCount={history.length}
            >
              {HistorySingleItem}
            </List>
          ) : (
            <span className={s.empty}>History list is empty</span>
          )}
        </div>
      </div>
    </section>
  )
}
