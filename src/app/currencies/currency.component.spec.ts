import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CurrencyComponent } from './currency.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CurrencyService} from './currency.service';
import { from } from 'rxjs';




describe('Currency component', () => {

const mockSumary =     [{
  "id": "5b71fc48-3dd3-540c-809b-f8c94d0e68b5",
  "base": "BTC",
  "name": "Bitcoin",
  "currency": "NZD",
  "unit_price_scale": 2,
  "market_cap": "71949117610.56",
  "percent_change": -0.0007772272214355038,
  "latest": "6003.58049706"
}];
let summaryList;
let summaryStream;


  let spyCurrencyService;
  beforeEach(async(() => {
    summaryList = [mockSumary];
    summaryStream = from(summaryList);
    spyCurrencyService = jasmine.createSpyObj('CurrencyService', {getSummaryStream: summaryStream})
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
    let comp: CurrencyComponent = fixture.componentInstance;
    comp.base = "BTC";
    const currency = fixture.debugElement.componentInstance;
    expect(currency).toBeTruthy();
  });

 

  it('should render base currency in h2', () => {
    const fixture = TestBed.createComponent(CurrencyComponent);
    let comp: CurrencyComponent = fixture.componentInstance;
    comp.base = "BTC";
    const newCurrency = Object.assign({},mockSumary);
    from(summaryList);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('BTC');
  });
});