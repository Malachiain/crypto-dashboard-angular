import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { exhaustMap, map } from 'rxjs/operators'




export interface SummaryResponse {
  data: Summary[];
}
export interface Summary {
  id: string;
  base: string;
  currency: string;
  name: string;
  unit_price_scale: number;
  market_cap: string;
  percent_change: number;
  latest: string;
}



@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) {
    this.summaryStream = this.createSpotStream();
  }

  createSpotStream(){
    return timer(0, 30000)
    .pipe(exhaustMap(this.getSpot(this.http)));
  }


  summaryStream : Observable<Summary[]>;
  getSpot = (http: HttpClient) => () => {
    return http
    .get<SummaryResponse>(this.spotUrl)
    .pipe(map(s => s.data));
  }

  spotUrl = 'https://api.coinbase.com/v2/assets/summary?include_prices=false&base=NZD&resolution=day'

  getSummaryStream() {
    return this.summaryStream;
  }

}
