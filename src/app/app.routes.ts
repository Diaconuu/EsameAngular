import { Routes } from '@angular/router';
import { DashboardPage } from '../app/pages/dashboard/dashboard.page';
import { DetailPage } from '../app/pages/detail/detail.page';
import { FavoritesPage } from '../app/pages/favorites/favorites.page';

export const routes: Routes = [
  { path: '', component: DashboardPage },
  { path: 'detail/:id', component: DetailPage },
  { path: 'favorites', component: FavoritesPage },
];
