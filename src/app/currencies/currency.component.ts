import { Component } from '@angular/core';
import { CurrencyService, Spot, SpotResponse } from './currency.service';

@Component({
  selector: 'currency',
  templateUrl: './currency.component.html',
  styleUrls: ['currency.component.css']
})
export class CurrencyComponent {

  private spotPrice: Spot = {base: 'BTC', currency: 'NZD', amount: "0"};

  constructor(private currencyService: CurrencyService) {
    this.getSpotPrice();
  }

  getSpotPrice() {
    this.currencyService.getSpot()
    .subscribe((response: SpotResponse) => this.spotPrice = {...response.data});
  }

}

@Component({
  selector: 'currency',
  template: `<h1>MockCurrency</h1>`
})
export class MockCurrencyComponent {
}

