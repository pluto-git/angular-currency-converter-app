import { Injectable } from '@angular/core';
import { CurrencyForCard, CurrencyRate } from './currency-models';
import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  public currencyRates!: CurrencyRate;
  public navbarCurrencies!: any;

  isEmptyObject(obj: any): boolean {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop))
        return false;
    }
    return true;
  }

  getActualEuroAndUSD(base: string = 'UAH'): void {
    console.log(this.currencyRates);
    if (this.isEmptyObject(this.currencyRates)) return;

    this.navbarCurrencies = [
      { base: "EUR", value: 1 / this.currencyRates.rates.EUR, regardingCode: base, isFirst: true },
      { base: "USD", value: 1 / this.currencyRates.rates.USD, regardingCode: base, isFirst: false }
    ];

  }


  constructor() { }
}
