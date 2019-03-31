import { Component, Input } from '@angular/core';
import { CurrencyService, Summary } from './currency.service';

@Component({
  selector: 'currency',
  templateUrl: './currency.component.html',
  styleUrls: ['currency.component.css']
})
export class CurrencyComponent {

  private summary: Summary =   {
    "id": "",
    "base": "-",
    "name": "",
    "currency": "",
    "unit_price_scale": 2,
    "market_cap": "",
    "percent_change": 0,
    "latest": "0"
  }
;
  private lastUpdated: Date;
  private updated: Boolean = false;
  private change: Number;

  @Input() base: String;

  constructor(private currencyService: CurrencyService) {
    this.getSpotPrice();
  }

  getSpotPrice() {
    this.currencyService
    .getSummaryStream()
    .subscribe((summaryList: Summary[]) => {
      console.log("updated currency services");
  
      const newSummary = summaryList
      .filter(s => s.base === this.base)
      .pop();
      if ( newSummary) {
        if (newSummary.latest === this.summary.latest) {
          this.change = 0;
        } else {
          this.change = this.summary.latest > newSummary.latest? -1: 1;
        }
        this.summary = newSummary;
        this.lastUpdated = new Date();
        this.updated = true;
        setTimeout(()=> this.updated =false, 5000); 
    }

    
    });
  }

}

@Component({
  selector: 'currency',
  template: `<h1>MockCurrency</h1>`
})
export class MockCurrencyComponent {
}

