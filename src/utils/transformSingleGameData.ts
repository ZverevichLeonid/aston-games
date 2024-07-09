import { rawSingleGameData, transformedSingleGameData } from '../types/types'

export function transformSingleGameData(game: rawSingleGameData) {
  const transformedSingleGameData: transformedSingleGameData = {
    name: game.name,
    image: game.images.masthead.xl,
    companies: game.Companies,
    platforms: game.Platforms,
    percentRecommended: game.percentRecommended.toFixed(),
    topCriticScore: game.topCriticScore.toFixed(),
    firstReleaseDate: new Date(game.firstReleaseDate).toLocaleDateString(),
  }

  return transformedSingleGameData
}
