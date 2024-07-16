import { Link } from 'react-router-dom'
import { deleteUrlHistory } from '../../../redux/store/historySlice/historySlice'
import { useAppDispatch } from '../../../hooks/reduxHooks'
import PropTypes from 'prop-types'
import s from './HistorySingleItem.module.scss'

interface HistorySingleItemProps {
  url: string
  id: string
}

export const HistorySingleItem = ({ url, id }: HistorySingleItemProps) => {
  const dispatch = useAppDispatch()

  return (
    <div className={s.link}>
      <Link to={`/search?query=${url}`} className={s.url}>
        {url}
      </Link>
      <span
        onClick={() => dispatch(deleteUrlHistory({ url, id }))}
        className={s.deletebtn}
      >
        x
      </span>
    </div>
  )
}

HistorySingleItem.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
