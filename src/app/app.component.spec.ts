import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MockCurrencieComponent } from './currencies/currencies.component';
import { HeadComponent} from './head/head.component'
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CurrencyService} from './currencies/currency.service';
import { By } from '@angular/platform-browser';


describe('AppComponent', () => {
  const spyCurrencyService = jasmine.createSpyObj('CurrencyService', ['getSpot'])
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        MockCurrencieComponent,
        HeadComponent
      ],
      providers: [
        {provide:CurrencyService, useValue: spyCurrencyService}
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Cryptocurrency Dashboard'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Cryptocurrency Dashboard');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('CryptoDash');
  });
  it('should render the currencies component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const currencies = fixture.debugElement.query(By.css('#test-currencies'));
    const compiled = currencies.nativeElement;
    console.log(compiled)
    expect(compiled.textContent).toContain('MockCurrencies');
  });
});
