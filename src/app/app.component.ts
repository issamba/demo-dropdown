import {Component, OnInit} from '@angular/core';
import {City} from "./Model/City";
import {Country} from "./Model/Country";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cities: City [] = [];
  selectedCity: City = {code :"", label:""};
  numbers: number[] = [5, 6, 45, 39, 33];
  selectedNumber: number = 6;
  countries: Country[] = [];
  selectedCountry: Country = {code : "USA", fullName: "United states of America "};

  ngOnInit(): void {
    this.fillCities();
    this.fillCountries();
  }

  private fillCities() {
    this.cities.push({code: "NYK", label: "New York"},
      {code: "PH", label: "Philadelphia"},
      {code: "CH", label: "Chicago"},
      {code: "LA", label: "Los Angles"},)
  }

  private fillCountries() {
    this.countries.push({code: "TN", fullName: "Tunisia"},
      {code: "DZ", fullName: "Algeria"},
      {code: "USA", fullName: "United states of America "},
      {code: "Fr", fullName: "France"},)
  }


}
