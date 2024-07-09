import { RawSingleGameData, TransformedSingleGameData } from '../types/types'

export function transformSingleGameData(
  game: RawSingleGameData,
): TransformedSingleGameData {
  const transformedSingleGameData: TransformedSingleGameData = {
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
