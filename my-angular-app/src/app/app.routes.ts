import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { Checkout } from './pages/checkout/checkout';
import { Orders } from './pages/orders/orders';
import { Tracking } from './pages/tracking/tracking';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', redirectTo: '' },
  { path: 'checkout', component: Checkout, title: 'Checkout | My Angular App' },
  { path: 'orders', component: Orders, title: 'Orders | My Angular App' },
  { path: 'tracking', component: Tracking, title: 'Tracking | My Angular App' },
  { path: '**', component: NotFound }                   // wildcard
];
