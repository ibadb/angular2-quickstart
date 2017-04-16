import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { CountryService } from "../../services/country.service";
import { Country } from "../../models/country.model";

@Component({
    moduleId: module.id,
    selector: 'countries',
    templateUrl: 'countries.component.html',
    styleUrls: ['styles/tables.css']
})

export class CountriesComponent implements OnInit {
    constructor(private _countryService: CountryService, private _router: Router) { }

    countries = {
        geonames: Array<Country>()
    };

    ngOnInit() {
        this._countryService.getCountries().subscribe(x => {
            this.countries = x;
        });
     }

     navigateToCountryDetail(countryCode: string) {
         this._router.navigate(['/countries', countryCode]);
     }
}