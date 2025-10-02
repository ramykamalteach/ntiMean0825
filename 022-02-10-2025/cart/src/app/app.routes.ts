import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Orders } from './pages/orders/orders';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: Login },
    { path: 'order', component: Orders, canActivate: [authGuard] },
    { path: '**', redirectTo: '' }
];
