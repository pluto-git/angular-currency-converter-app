import { Component } from '@angular/core';
import { IconService } from './shared/data-access/icon.service';
import { LoaderService } from './shared/data-access/loader.service';
import { CurrencyAPIService } from './shared/data-access/currency-api.service';
import { CurrencyConverterService } from './shared/data-access/currency-converter.service';

import { startWith, switchMap, timer } from 'rxjs';
import { CurrencyRate } from 'src/app/shared/data-access/currency-models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {

  title = 'angular-currency-exchange-app';
  interval$: any;
  currentTimeStamp!: number;
  lsKey: string = "Currencies";
 
  constructor(private iconService: IconService, public loaderService: LoaderService, private apiSvc: CurrencyAPIService, private curConvSvc: CurrencyConverterService,
    public loadingSvc: LoaderService) {
  }

  ngOnInit(): void {
    this.iconService.registerIcons();

    //calls are pretty limited for the free plan
    //so doing the turnover to get items from LS 
    //and subscribing in the case of an empty object or if the last update was 1h ago
    this.curConvSvc.currencyRates = JSON.parse(localStorage.getItem(this.lsKey)!) || {};

    if (this.curConvSvc.isEmptyObject(this.curConvSvc.currencyRates) ||
      (this.curConvSvc.currencyRates.hasOwnProperty('retrievalTimestamp') &&
        Date.now() > this.curConvSvc.currencyRates.retrievalTimestamp! + 3600 * 1000)) {
      this.getCurrencies();
    } else {
      this.curConvSvc.getActualEuroAndUSD();
    }

  }

  private getCurrencies(): void {

    const startDelayMs = (60 - new Date().getMinutes()) * 60 * 1000;
    const hourMs = 60 * 60 * 1000;

    timer(startDelayMs, hourMs).pipe(
      startWith(0),
      switchMap(() => this.apiSvc.getLiveCurrencies())
    ).subscribe({
      next: (data: CurrencyRate) => {
        //the api has a miniscule amount of calls for free.
        //and let's store it in ls for simplicity
        //and limit calls it with our retrieval timestamp.
        data.rates
        data.retrievalTimestamp = Date.now();
        localStorage.setItem(this.lsKey, JSON.stringify(data));
        this.curConvSvc.currencyRates = data;
        console.log(this.curConvSvc);
        this.curConvSvc.getActualEuroAndUSD();
      },
      error: (err: Error) => console.error(err)
    });

  }






}
