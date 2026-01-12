import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { Checkout } from './pages/checkout/checkout';
import { Orders } from './pages/orders/orders';
import { Tracking } from './pages/tracking/tracking';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', redirectTo: '' },
  { path: 'checkout', component: Checkout },
  { path: 'orders', component: Orders },
  { path: 'tracking', component: Tracking },
  { path: '**', component: NotFound }                   // wildcard
];
