import { BoundElementProperty } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'countries-list',
  templateUrl: './countries-list.component.html',
  // template: '<div>{{ currentCountry }}</div>',
  styleUrls: ['./countries-list.component.css'],
  // styles: ['.countries-list {
  //   color: red;
  //   font-weight: bold;
  // }']
  encapsulation: ViewEncapsulation.None
})
export class CountriesListComponent implements OnInit {
 @Input("selectedCountry") currentCountry = "egypt";
 @Output("changed") countryUpdated = new EventEmitter();
 country: string;
  countries = [
    { name: "Egypt", value: "egypt" },
    { name: "Syria", value: "syria" },
    { name: "Tunisia", value: "tunisia" },
    { name: "Morocco", value: "morocco" },
    { name: "Saudi arabia", value: "saudi" },
  ];

  constructor() { }

  ngOnInit() {
  }

  countryChanged() {
    // console.log("this.country", this.country);
    this.countryUpdated.emit(this.country);
  }
}
