import { useSearchParams } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { gameApi } from '../redux/services/gameService'
import { SearchList } from '../components/SearchList/SearchList'
import { Loader } from '../components/Loader/Loader'

export const SearchPage = () => {
  const [searchParams] = useSearchParams()
  const queryParams = searchParams.get('query')
  const { data, isLoading } = gameApi.useGetGameSearchQuery(queryParams!)

  return (
    <>
      <Header />
      {!isLoading ? <SearchList data={data!} /> : <Loader />}
    </>
  )
}
