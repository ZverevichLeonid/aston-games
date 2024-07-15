import { FavoritesPage } from '../pages/FavoritesPage'
import { GamePage } from '../pages/GamePage'
import { HistoryPage } from '../pages/HistoryPage'
import { HomePage } from '../pages/HomePage'
import { SearchPage } from '../pages/SearchPage'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export const publicRoutes = [
  { path: '', component: HomePage },
  { path: 'game/:gameId', component: GamePage },
  { path: 'search', component: SearchPage },
  { path: 'signIn', component: SignIn },
  { path: 'signUp', component: SignUp },
]

export const authOnlyRoutes = [
  { path: 'history', component: HistoryPage },
  { path: 'favorites', component: FavoritesPage },
]
