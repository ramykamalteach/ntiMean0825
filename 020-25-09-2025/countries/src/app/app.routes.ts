import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Countries } from './pages/countries/countries';
import { ShowCountry } from './pages/show-country/show-country';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'countries/:lang', component: Countries },
    { path: 'country/:countryName', component: ShowCountry },
    { path: '**', redirectTo: '' }
];
