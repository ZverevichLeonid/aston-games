import loader from '../../assets/loader.gif'
import s from './Loader.module.scss'

export const Loader = () => {
  return (
    <div className={s.loader}>
      <img src={loader} alt="loader" />
    </div>
  )
}
