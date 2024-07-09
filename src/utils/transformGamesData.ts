import { RawGameData, TransformedGameData } from '../types/types'

export function transformGamesData(
  games: RawGameData[],
): TransformedGameData[] {
  const transformedGamesArray: TransformedGameData[] = []
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
