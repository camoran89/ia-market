import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component.js';
import { SearchComponent } from './features/search/search.component.js';
import { VendorComponent } from './features/vendor/vendor.component.js';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'vendor', component: VendorComponent }
];
