import {
  selectAllHistory,
  selectIsLoading,
} from '../../redux/store/historySlice/historySlice'
import { HistorySingleItem } from './HistorySingleItem/HistorySingleItem'
import { useAppSelector } from '../../hooks/reduxHooks'
import { FixedSizeList as List } from 'react-window'
import s from './HistoryList.module.scss'
import { Loader } from '../Loader/Loader'

export const HistoryList = () => {
  const history = useAppSelector(selectAllHistory)
  const isLoading = useAppSelector(selectIsLoading)
  return (
    <section>
      <div className="container">
        <h1 className={s.title}>Search history</h1>
        <div>
          {isLoading && <Loader />}
          {history.length > 0 && (
            <List
              itemData={{ history: history }}
              itemSize={53}
              width={1100}
              height={250}
              itemCount={history.length}
            >
              {HistorySingleItem}
            </List>
          )}
          {!isLoading && history.length === 0 && (
            <span className={s.empty}>History list is empty</span>
          )}
        </div>
      </div>
    </section>
  )
}
