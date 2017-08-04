import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from './../../models/stock';

@Component({
  selector: 'stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  @Input('stocks') public stocks: Stock[];

  constructor(private router: Router) { }

  public ngOnInit() {
  }

  public buy(stock: Stock) {
    this.router.navigate(['/buy/', stock.symbol]);
  }

  public sell(stock: Stock) {
    console.log('You want to sell stock: ' + stock.name);
  }

}
