import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CurrencyComponent } from './currency.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CurrencyService} from './currency.service';
import { Observable } from 'rxjs';


describe('Currency component', () => {
  const spyCurrencyService = jasmine.createSpyObj('CurrencyService', {getSpot: Observable.create(obs => obs.next({data: {
    base: 'BTC',
    currency: 'NZD',
    amount: 1542.00
  }}))})
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        CurrencyComponent

      ],
      providers: [
        {provide:CurrencyService, useValue: spyCurrencyService}
      ]
    }).compileComponents();
  }));

  it('should create the currency', () => {
    const fixture = TestBed.createComponent(CurrencyComponent);
    const currency = fixture.debugElement.componentInstance;
    expect(currency).toBeTruthy();
  });

 

  it('should render base currency in h2', () => {
    const fixture = TestBed.createComponent(CurrencyComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('BTC');
  });
});