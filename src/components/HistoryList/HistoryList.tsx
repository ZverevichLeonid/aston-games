import { selectAllHistory } from '../../redux/store/historySlice/historySlice'
import { HistorySingleItem } from './HistorySingleItem/HistorySingleItem'
import { useAppSelector } from '../../hooks/reduxHooks'
import { FixedSizeList as List } from 'react-window'
import s from './HistoryList.module.scss'

export const HistoryList = () => {
  const history = useAppSelector(selectAllHistory)

  return (
    <section>
      <div className="container">
        <h1 className={s.title}>Search history</h1>
        <div>
          {history.length > 0 ? (
            <List
              itemData={{ history: history }}
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
