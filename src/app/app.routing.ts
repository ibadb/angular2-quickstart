import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountriesComponent } from "./components/countries/countries.component";
import { CountryComponent } from "./components/countries/country/country.component";

export const routes: Routes = [
  { path: 'countries', component: CountriesComponent },
  { path: 'countries/:code', component: CountryComponent }
];


export const routing: ModuleWithProviders  = RouterModule.forRoot(routes);