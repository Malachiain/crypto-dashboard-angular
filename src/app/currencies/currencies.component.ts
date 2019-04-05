import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'currencies',
  template: `<h2 id="test-currencies">MockCurrencies</h2>`
})
export class MockCurrencieComponent {
}
