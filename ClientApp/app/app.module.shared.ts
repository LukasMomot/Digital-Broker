import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BuyAndSellFormComponent } from './components/buy-and-sell-form/buy-and-sell-form.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StocksService } from './services/stocks.service';

import { AppComponent } from './components/app/app.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { HomeComponent } from './components/home/home.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        SearchPageComponent,
        SearchBarComponent,
        StockListComponent,
        BuyAndSellFormComponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'searchPage', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'search-page', component: SearchPageComponent },
            { path: 'buy/:symbol', component: BuyAndSellFormComponent },
            { path: '**', redirectTo: 'search-page' }
        ]),
        FormsModule
    ],
    providers: [
        StocksService
    ]
};
