import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public term: string = "";
  @Output('term-changed') termChanged: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public search() {
    console.log(this.term);
    this.term = "";
    this.termChanged.emit(this.term);
  }
}
