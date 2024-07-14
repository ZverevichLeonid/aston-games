export interface RawGameData {
  images: {
    box: {
      [boxType: string]: string
    }
  }
  topCriticScore: number
  tier: string
  name: string
  id: number
}

export interface TransformedGameData {
  name: string
  image: string
  score: string
  id: number
}
interface ImageSize {
  [ImageSize: string]: string
}

interface Screenshot {
  [Screenshot: string]: string
}

interface Images {
  box: {
    [boxType: string]: string
  }
  square: ImageSize
  masthead: ImageSize
  banner: {
    [bannerType: string]: string
  }
  screenshots: Screenshot[]
}

interface MainChannel {
  channelId: string
  channelTitle: string
  description: string
  title: string
  image: string
  externalUrl: string
}

interface BaseGame {
  id: number
  name: string
}

interface Rating {
  value: string
}

interface Trailer {
  isOpenCritic: boolean
  isSpecial: string
  publishedDate: string
  title: string
  videoId: string
  externalUrl: string
  channelTitle: string
  channelId: string
  description: string
}

interface Company {
  name: string
  type: string
}

interface Platform {
  id: number
  name: string
  shortName: string
  imageSrc?: string
  releaseDate: string
  displayRelease: string
}

interface Genre {
  id: number
  name: string
}

export interface RawSingleGameData {
  images: Images
  mainChannel: MainChannel
  baseGame: BaseGame
  Rating: Rating
  imageMigrationComplete: boolean
  hasLootBoxes: boolean
  percentRecommended: number
  numReviews: number
  numTopCriticReviews: number
  medianScore: number
  topCriticScore: number
  percentile: number
  tier: string
  biggestDiscountDollars: number
  biggestDiscountPercentage: number
  name: string
  trailers: Trailer[]
  Companies: Company[]
  Platforms: Platform[]
  Genres: Genre[]
  id: number
  firstReleaseDate: string
  createdAt: string
  updatedAt: string
  description: string
  firstReviewDate: string
  latestReviewDate: string
  criticalReviewDate: string
  url: string
}

export interface TransformedSingleGameData {
  name: string
  image: string
  platforms: Platform[]
  topCriticScore: string
  percentRecommended: string
  companies: Company[]
  firstReleaseDate: string
}

export interface RawSearchedGames {
  id: number
  dist: number
  name: string
}
