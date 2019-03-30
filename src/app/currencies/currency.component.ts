import { Component } from '@angular/core';
import { CurrencyService, Spot, SpotResponse } from './currency.service';
import { timeout } from 'q';

@Component({
  selector: 'currency',
  templateUrl: './currency.component.html',
  styleUrls: ['currency.component.css']
})
export class CurrencyComponent {

  private spotPrice: Spot = {base: '-', currency: '-', amount: "0"};
  private lastUpdated: Date;
  private updated: Boolean = false;
  private change: Number;

  constructor(private currencyService: CurrencyService) {
    this.getSpotPrice();
  }

  getSpotPrice() {
    this.currencyService.getSpotStream()
    .subscribe((response: SpotResponse) => {
      console.log("updated currency services");
      const lastPrice = this.spotPrice.amount;
      this.spotPrice = {...response.data};
      if (lastPrice === this.spotPrice.amount) {
        this.change = 0;
      } else {
        this.change = lastPrice > this.spotPrice.amount? -1: 1;
      }
      this.lastUpdated = new Date();
      this.updated = true;
      setTimeout(()=> this.updated =false, 5000); 

    
    });
  }

}

@Component({
  selector: 'currency',
  template: `<h1>MockCurrency</h1>`
})
export class MockCurrencyComponent {
}

