import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { exhaustMap } from 'rxjs/operators'


export interface Spot {
  base: string;
  currency: string;
  amount: string;
}

export interface SpotResponse {
  data: Spot;
}



@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) {
    this.spotStream = this.createSpotStream();
  }

  createSpotStream(){
    return timer(0, 30000)
    .pipe(exhaustMap(this.getSpot(this.http)));
  }


  spotStream : Observable<SpotResponse>;
  getSpot = (http: HttpClient) => () => {
    console.log("get spot called")
    return http.get<SpotResponse>(this.spotUrl);
  }

  spotUrl = 'https://api.coinbase.com/v2/prices/BTC-NZD/spot'

  getSpotStream() {
    return this.spotStream;
  }

}
