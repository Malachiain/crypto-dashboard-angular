import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component} from '@angular/core';

import { CurrenciesComponent } from './currencies.component';

@Component({
  selector: 'currency',
  template: `<h1>MockCurrency</h1>`
})
class MockCurrencyComponent {
}


describe('CurrenciesComponent', () => {
  let component: CurrenciesComponent;
  let fixture: ComponentFixture<CurrenciesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrenciesComponent,
        MockCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
