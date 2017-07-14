import { Component, Input, OnInit } from '@angular/core';
import { Stock } from './../../models/stock';

@Component({
  selector: 'stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  @Input('stocks') public stocks: Stock[];

  constructor() { }

  public ngOnInit() {
  }

}
