import { Component, OnInit } from '@angular/core';

import { CountriesService } from "../../services/countries.service";

@Component({
    moduleId: module.id,
    selector: 'countries',
    templateUrl: 'countries.component.html'
})

export class CountriesComponent implements OnInit {
    constructor(private countriesService: CountriesService) { }

    countries:any[] = [];

    ngOnInit() {
        this.countries = this.countriesService.getList();
     }
}