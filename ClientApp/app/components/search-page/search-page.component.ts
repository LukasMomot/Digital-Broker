import { Component, OnInit } from '@angular/core';
import { Stock } from './../../models/stock';
import { StocksService } from './../../services/stocks.service';

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  public stocks: Stock[];

  constructor(private stockService: StocksService) { }

  public ngOnInit() {
    this.stockService.getMostTraded().subscribe((data) => {
      this.stocks = data;
    }, (error) => {
      console.log(error);
    });

    // this.stocks = [
    //   {
    //     name: 'BMW',
    //     symbol: 'BMW',
    //     price: 80,
    //   },
    //   {
    //     name: 'Vonovia',
    //     symbol: 'VNA',
    //     price: 34,
    //   },
    //   {
    //     name: 'Bayer',
    //     symbol: 'BAY',
    //     price: 105,
    //   }
    // ];
  }

  public onTermChanged(term: any) {
    console.log('Evenet recieved' + term);
  }
}
