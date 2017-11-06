import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from './../../models/stock';
import { StocksService } from './../../services/stocks.service';

interface BuyAndSellModel {
  name: string;
  symbol: string;
  currentPrice: number;
  limitOrder: number;
  amount: number;
}

@Component({
  selector: 'buy-and-sell-form',
  templateUrl: './buy-and-sell-form.component.html',
  styleUrls: ['./buy-and-sell-form.component.css']
})
export class BuyAndSellFormComponent implements OnInit {
  public model: BuyAndSellModel = {
              name: '',
              symbol: '',
              currentPrice: 0,
              limitOrder: 0,
              amount: 10
            };

  constructor(private route: ActivatedRoute, private router: Router, private stocksService: StocksService) {
    this.route.params.subscribe((params) => {
      this.model.symbol = params['symbol'];
    });
  }

  public ngOnInit() {
    this.stocksService.getStock(this.model.symbol).subscribe((stock) => {
      this.model.currentPrice = stock.price;
      this.model.name = stock.name;
      this.model.limitOrder = +(stock.price * 1.02).toFixed(2);
    });
  }

  public submit(f: NgForm) {
    console.log(f);
    console.log(this.model);
    this.router.navigate(['/search-form']);
  }

  public cancel() {
    this.router.navigate(['/search-form']);
  }
}
