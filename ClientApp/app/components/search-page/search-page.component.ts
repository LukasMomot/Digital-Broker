import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onTermChanged(term: any){
    console.log('Evenet recieved' + term);
  }
}
