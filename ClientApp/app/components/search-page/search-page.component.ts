import { Component, OnInit } from '@angular/core';
import { Stock } from './../../models/stock';

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  public stocks: Stock[];

  constructor() { }

  public ngOnInit() {
      this.stocks = [
        {
          name: 'BMW',
          symbol: 'BMW',
          price: 80,
        },
        {
          name: 'Vonovia',
          symbol: 'VNA',
          price: 34,
        },
        {
          name: 'Bayer',
          symbol: 'BAY',
          price: 105,
        }
      ];
  }

  public onTermChanged(term: any) {
    console.log('Evenet recieved' + term);
  }
}
