import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StockListComponent } from './components/stock-list/stock-list.component';

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
        StockListComponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'search-page', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'search-page', component: SearchPageComponent },
            { path: '**', redirectTo: 'home' }
        ]),
        FormsModule
    ]
};
