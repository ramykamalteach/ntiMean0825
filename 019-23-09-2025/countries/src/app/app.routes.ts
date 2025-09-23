import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Countries } from './pages/countries/countries';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'countries/:lang', component: Countries },
    { path: '**', redirectTo: '' }
];
