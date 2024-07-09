import { rawGameData, transformedGameData } from '../types/types'

export function transformGamesData(games: rawGameData[]) {
  const transformedGamesArray: transformedGameData[] = []
  games.map(game => {
    transformedGamesArray.push({
      name: game.name,
      image: game.images.box.sm,
      score: game.topCriticScore.toFixed(),
      id: game.id,
    })
  })
  return transformedGamesArray
}
