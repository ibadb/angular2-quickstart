import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from "../app.routing";
import { AppComponent }  from '../components/app.component';
import { CountriesComponent }  from '../components/countries/countries.component';

import { CountriesService } from "../services/countries.service";

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, CountriesComponent, routingComponents ],
  bootstrap:    [ AppComponent ],
  providers:    [ CountriesService ]
})
export class AppModule { }
