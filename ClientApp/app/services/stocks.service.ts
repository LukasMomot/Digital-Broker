import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class StocksService {

  private url: string = 'http://localhost:5001';
  constructor(private http: Http) { }

  public getMostTraded() {
    return this.http.get(this.url + '/mosttraded')
      .map((res) => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    // if (error.status === 400)
    //   return Observable.throw(new BadInput(error.json()));

    // if (error.status === 404)
    //   return Observable.throw(new NotFoundError());

    // return Observable.throw(new AppError(error));
    return Observable.throw(error);
  }

}
