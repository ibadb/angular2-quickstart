import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";

import { routing } from "../app.routing";
import { AppComponent }  from '../components/app.component';
import { CountriesComponent }  from '../components/countries/countries.component';
import { CountryComponent } from "../components/countries/country/country.component";

import { CountryService } from "../services/country.service";

@NgModule({
  imports:      [ BrowserModule, HttpModule, routing ],
  declarations: [ AppComponent, CountriesComponent, CountryComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ CountryService ]
})
export class AppModule { }
