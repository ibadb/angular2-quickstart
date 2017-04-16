import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Country } from "../models/country.model";
import { Constants } from "../shared/app.constants";

@Injectable()
export class CountryService {
    
    constructor(private http: Http) { }

    getCountries() {
        return this.http
            .get(Constants.COUNTRIES_URL)
            .map((res: Response) => res.json());
    }

    getCountry(countryCode: string) {
        if(countryCode) {
            let countryUrl = Constants.COUNTRY_URL.replace('{0}', countryCode);

            return this.http
                .get(countryUrl)
                .map((res: Response) => res.json());
        }
        
        return null;
    }

    getNeighbours(geonameId: number) {
        if(geonameId) {
            let neighboursUrl = Constants.NEIGHBOURS_URL.replace('{0}', geonameId.toString());

            return this.http
                .get(neighboursUrl)
                .map((res: Response) => res.json());
        }
    }
}

