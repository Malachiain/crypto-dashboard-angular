import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MockCurrencyComponent } from './currencies/currency.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CurrencyService} from './currencies/currency.service';


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
        MockCurrencyComponent
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
    expect(compiled.querySelector('h1').textContent).toContain('Cryptocurrency Dashboard!');
  });
});
