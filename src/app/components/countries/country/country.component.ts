import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CountryService } from "../../../services/country.service";
import { Country } from "../../../models/country.model";
import { Neighbour } from "../../../models/neighbour.model";

@Component({
    moduleId: module.id,
    selector: 'country',
    templateUrl: 'country.component.html',
    styleUrls: [ 'country.component.css' ]
})

export class CountryComponent implements OnInit, OnDestroy {
    constructor(private _countryService: CountryService, private route: ActivatedRoute) { }
    
    private subscription: any;

    public selectedCountry: Country;
    public neighbours: {
        totalResultsCount: number,
        geoname: Array<Neighbour>
    }
    

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            let countryCode = params['code'];

            this._countryService
                .getCountry(countryCode)
                .subscribe(x => {
                    this.selectedCountry = x.geonames[0];
                    this._countryService
                        .getNeighbours(this.selectedCountry.geonameId)
                        .subscribe(x => this.neighbours = x);
                });
        });
     }

     ngOnDestroy() {
         this.subscription.unsubscribe();
     }
}