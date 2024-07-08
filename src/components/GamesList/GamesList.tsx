import { useEffect, useState } from 'react'
import s from './GamesList.module.scss'
import { Game } from './Game/Game'
export const GamesList = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    async function getData() {
      const data = await fetch(
        'https://opencritic-api.p.rapidapi.com/game/popular',
        {
          headers: {
            'x-rapidapi-key':
              '2a5201c625mshb9f0eef81b6e689p1fde3djsnf6cadb0689aa',
            'x-rapidapi-host': 'opencritic-api.p.rapidapi.com',
          },
        },
      )
      const res = await data.json()
      setData(res)
      console.log(res)
    }

    getData()
  }, [])

  return (
    <section>
      <div className="container">
        <h1 className={s.gameListTitle}>Popular Games</h1>
        <span className={s.gameListSubTitle}>
          Don't miss the most popular games on OpenCritic today
        </span>
        <div className={s.gameList}>
          {data.map(item => {
            return (
              <Game
                key={item.name}
                name={item.name}
                image={item.images.box.sm}
                score={item.topCriticScore}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
