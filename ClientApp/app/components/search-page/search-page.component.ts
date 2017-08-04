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
  }

  public onTermChanged(term: string) {
    console.log('Evenet recieved' + term);
    this.stockService.getStock(term).subscribe((data) => {
      console.log(data);
      this.stocks = [...this.stocks, ...data];
    }, (error) => {
      console.log(error);
    });
  }
}
