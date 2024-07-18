import { useEffect } from 'react'
import { Header } from '../components/Header/Header'
import { HistoryList } from '../components/HistoryList/HistoryList'
import { useAppDispatch } from '../hooks/reduxHooks'
import { getHistory } from '../redux/store/historySlice/historySlice'

export const HistoryPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getHistory())
  }, [dispatch])

  return (
    <>
      <Header />
      <HistoryList />
    </>
  )
}
