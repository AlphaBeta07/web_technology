import { Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer';
import { SalonComponent } from './salon/salon';

export const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'customer', component: CustomerComponent },
  { path: 'salon', component: SalonComponent }
];
