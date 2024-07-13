import { useSearchParams } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { gameApi } from '../redux/services/gameService'
import { SearchList } from '../components/SearchList/SearchList'

export const SearchPage = () => {
  const [searchParams] = useSearchParams()
  const queryParams = searchParams.get('query')
  const { data } = queryParams
    ? gameApi.useGetGameSearchQuery(queryParams)
    : { data: undefined }

  return (
    <>
      <Header />
      {data ? <SearchList data={data} /> : <span>No data</span>}
    </>
  )
}
