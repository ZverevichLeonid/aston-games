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
  // const data: RawSearchedGames[] = [
  //   {
  //     id: 194,
  //     name: 'Minecraft',
  //     dist: 0,
  //   },
  //   {
  //     id: 14349,
  //     name: 'Minecraft Legends',
  //     dist: 0.44444442,
  //   },
  //   {
  //     id: 9258,
  //     name: 'Minecraft Dungeons',
  //     dist: 0.4736842,
  //   },
  //   {
  //     id: 2094,
  //     name: 'Minecraft: Wii U Edition',
  //     dist: 0.5833334,
  //   },
  //   {
  //     id: 238,
  //     name: 'MouseCraft',
  //     dist: 0.6,
  //   },
  //   {
  //     id: 15664,
  //     name: 'Minecraft x Dungeons & Dragons.',
  //     dist: 0.6153846,
  //   },
  //   {
  //     id: 480,
  //     name: 'Minecraft: Xbox One Edition',
  //     dist: 0.6296296,
  //   },
  //   {
  //     id: 2255,
  //     name: 'Minecraft: Story Mode - Season One',
  //     dist: 0.6666666,
  //   },
  //   {
  //     id: 5372,
  //     name: 'Minecraft: Story Mode - Season Two',
  //     dist: 0.6666666,
  //   },
  //   {
  //     id: 11777,
  //     name: 'Minecraft Dungeons: Hidden Depths',
  //     dist: 0.6875,
  //   },
  // ]
  return (
    <>
      <Header />
      {data ? <SearchList data={data} /> : <span>No data</span>}
    </>
  )
}

// ОДИНАКОВЫЕ УРЛЫ НЕ ЗАХОДЯТ
