import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Details } from './pages/details/details';
import { Create } from './pages/create/create';
import { Update } from './pages/update/update';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'details/:id', component: Details },
  { path: 'create', component: Create },
  { path: 'update/:id', component: Update },
  { path: '**', redirectTo: '' }
];
