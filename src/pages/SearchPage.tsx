import { useSearchParams } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { gameApi } from '../redux/services/gameService'
import { SearchList } from '../components/SearchList/SearchList'
import { useEffect, useState } from 'react'

export const SearchPage = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query')
  const [queryParams, setQueryParams] = useState<string>('')

  useEffect(() => {
    setQueryParams(query!)
  }, [searchParams, query])

  const { data } = gameApi.useGetGameSearchQuery(queryParams)

  return (
    <>
      <Header />
      {data ? <SearchList data={data} /> : <span>No data</span>}
    </>
  )
}
