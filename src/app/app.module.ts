import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyComponent } from './currencies/currency.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrenciesComponent } from './currencies/currencies.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    CurrenciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
