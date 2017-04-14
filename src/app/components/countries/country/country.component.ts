import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CountryService } from "../../../services/country.service";
import { Country } from "../../../models/country.model";

@Component({
    moduleId: module.id,
    selector: 'country',
    templateUrl: 'country.component.html'
})

export class CountryComponent implements OnInit, OnDestroy {
    constructor(private _countryService: CountryService, private route: ActivatedRoute) { }
    
    private subscription: any;
    selectedCountry: {
        geonames: Array<Country>
    };
    

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            let countryCode = params['code'];

            this._countryService
                .getCountry(countryCode)
                .subscribe(x => this.selectedCountry = x);
        });
     }

     ngOnDestroy() {
         this.subscription.unsubscribe();
     }
}