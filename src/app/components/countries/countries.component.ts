import { Component, OnInit } from '@angular/core';

import { CountryService } from "../../services/country.service";
import { Country } from "../../models/country.model";

@Component({
    moduleId: module.id,
    selector: 'countries',
    templateUrl: 'countries.component.html',
    styleUrls: ['styles/tables.css']
})

export class CountriesComponent implements OnInit {
    constructor(private _countryService: CountryService) { }

    countries = {
        geonames: Array<Country>()
    };

    ngOnInit() {
        this._countryService.getCountries().subscribe(x => {
            this.countries = x;
        });
        
     }
}