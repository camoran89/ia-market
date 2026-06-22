import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component.js';
import { SearchComponent } from './features/search/search.component.js';
import { VendorComponent } from './features/vendor/vendor.component.js';
import { BuyerComponent } from './features/buyer/buyer.component.js';
import { AdminComponent } from './features/admin/admin.component.js';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'vendor', component: VendorComponent },
  { path: 'buyer', component: BuyerComponent },
  { path: 'admin', component: AdminComponent }
];
