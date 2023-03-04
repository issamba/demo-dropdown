import {Component} from '@angular/core';
import {City} from "../../Model/City";
import {Country} from "../../Model/Country";
import {CountryService} from "../../services/country.service";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {
  cities: City [] = [];
  selectedCity: City = {code: "", label: ""};
  numbers: number[] = [5, 6, 45, 39, 33];
  selectedNumber: number = 6;
  countries: Country[] = [];
  selectedCountry: Country = {code: "USA", fullName: "United states of America "};

  constructor(private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.fillCities();
    this.fillCountries();
  }

  private fillCities() {
    this.countryService.getCities().subscribe(rs => {
      this.cities = rs;
    });
  }

  private fillCountries() {
    this.countryService.getCountries().subscribe(rs => {
      this.countries = rs;
    });
  }

}
