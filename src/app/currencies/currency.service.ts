import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
  }
  spotUrl = 'https://api.coinbase.com/v2/prices/BTC-NZD/spot'

  getSpot() {
    return this.http.get<SpotResponse>(this.spotUrl);
  }
}
