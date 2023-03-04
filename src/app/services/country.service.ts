import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {City} from "../Model/City";
import {Country} from "../Model/Country";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() {
  }


  getCountries(): Observable<Country[]> {
    return of([{code: "TN", fullName: "Tunisia"},
      {code: "DZ", fullName: "Algeria"},
      {code: "USA", fullName: "United states of America "},
      {code: "Fr", fullName: "France"}])
  }

  getCities(): Observable<City[]> {
    return of([{code: "NYK", label: "New York", codeCountry: "USA"},
      {code: "PH", label: "Philadelphia", codeCountry: "USA"},
      {code: "CH", label: "Chicago", codeCountry: "USA"},
      {code: "LA", label: "Los Angles", codeCountry: "USA"},
      {code: "TN", label: "Sousse", codeCountry: "TN"},
      {code: "NC", label: "Nice", codeCountry: "Fr"}])
  }


}
