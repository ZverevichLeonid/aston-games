import { Link } from 'react-router-dom'
import { deleteUrlHistory } from '../../../redux/store/historySlice/historySlice'
import { useAppDispatch } from '../../../hooks/reduxHooks'
import s from './HistorySingleItem.module.scss'

interface HistorySingleItemProps {
  data: {
    history: string[]
    id: string
  }
  index: number
  style: React.CSSProperties
}

export const HistorySingleItem = ({
  data,
  index,
  style,
}: HistorySingleItemProps) => {
  const dispatch = useAppDispatch()

  return (
    <div style={style} className={s.link}>
      <Link to={`/search?query=${data.history[index]}`} className={s.url}>
        {data.history[index]}
      </Link>
      <span
        onClick={() => dispatch(deleteUrlHistory({ url: data.history[index] }))}
        className={s.deletebtn}
      >
        x
      </span>
    </div>
  )
}
