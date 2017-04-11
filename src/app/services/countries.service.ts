import { Injectable } from '@angular/core';

@Injectable()
export class CountriesService {

    constructor() { }

    getList() {
        return [
            { id: 1, name: 'Pakistan' },
            { id: 2, name: 'Australia' },
            { id: 3, name: 'South Africa' }
        ];
    }
}