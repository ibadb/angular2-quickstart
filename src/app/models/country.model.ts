import { Serializable } from "../shared/serializable";

export class Country extends Serializable {
    continent: string;
    capital: string;
    languages: string;
    geonameId: number;
    south: number;
    isoAlpha3: string;
    north: number;
    fipsCode: string;
    population: number;
    east: number;
    isoNumeric: number;
    areaInSqKm: number;
    countryCode: string;
    west: number;
    countryName: string;
    continentName: string;
    currencyCode: string;

    parseNumber (key: string, value: number) {
        return parseInt(value.toLocaleString('en-us'));
    }
}