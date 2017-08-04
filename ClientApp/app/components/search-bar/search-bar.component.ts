import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public term: string = '';
  @Output('term-changed') termChanged: EventEmitter<string> = new EventEmitter();

  constructor() { }

  public ngOnInit() {
  }

  public search() {
    this.termChanged.emit(this.term);
    this.term = '';
  }
}
