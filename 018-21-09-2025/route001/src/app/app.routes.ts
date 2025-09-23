import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { ShowProduct } from './pages/show-product/show-product';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'product/:id', component: ShowProduct },
    { path: '**', redirectTo: '' } // fallback
];
