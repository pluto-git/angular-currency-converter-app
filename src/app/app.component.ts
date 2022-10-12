import { Component } from '@angular/core';
import { IconService } from './shared/data-access/icon.service';
import { LoaderService } from './shared/data-access/loader.service';
import { CurrencyAPIService } from './shared/data-access/currency-api.service';
import { CurrencyConverterService } from './shared/data-access/currency-converter.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ThemeService, AppThemes } from './shared/data-access/theme.service';

import { startWith, switchMap, timer, retry, share, takeUntil, Subject } from 'rxjs';
import { CurrencyRate } from 'src/app/shared/data-access/currency-models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {

  private lsKey: string = "Currencies";
  public isDarkTheme: boolean = false;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private iconService: IconService, public loaderService: LoaderService, private apiSvc: CurrencyAPIService, private curConvSvc: CurrencyConverterService,
    public loadingSvc: LoaderService, private spinner: NgxSpinnerService,
    public themeService: ThemeService) {

  }

  ngOnInit(): void {
    // setting up the default theme from localStorage
    this.getDefaultTheme();

    this.spinner.show();
    this.iconService.registerIcons();


    this.curConvSvc.currencyRates = JSON.parse(localStorage.getItem(this.lsKey)!) || {};

    if (this.curConvSvc.isEmptyObject(this.curConvSvc.currencyRates) ||
      (this.curConvSvc.currencyRates.hasOwnProperty('retrievalTimestamp') &&
        Date.now() > this.curConvSvc.currencyRates.retrievalTimestamp! + 3600 * 1000)) {
      this.getCurrencies();
    } else {
      this.curConvSvc.getActualEuroAndUSD();
    }

    //hide the spinner anyway
    this.spinner.hide();
  }

  private getDefaultTheme(): void {
    this.themeService.getTheme();
    this.themeService.currentTheme.pipe(takeUntil(this.destroy$)).subscribe((data) => {

      if (data === AppThemes.dark) {
        this.isDarkTheme = true;
      } else {
        this.isDarkTheme = false;
      }
    });
  }

  //call to our API
  private getCurrencies(): void {

    const startDelayMs = (60 - new Date().getMinutes()) * 60 * 1000;
    const hourMs = 60 * 60 * 1000;

    timer(startDelayMs, hourMs).pipe(
      startWith(0),
      switchMap(() => this.apiSvc.getLiveCurrencies()),
      retry(2),
      share(),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (data: CurrencyRate) => {
        //the api has a miniscule amount of calls for free.
        //and let's store it in ls for simplicity
        //and limit calls it with our retrieval timestamp.
        data.retrievalTimestamp = Date.now();
        localStorage.setItem(this.lsKey, JSON.stringify(data));
        this.curConvSvc.currencyRates = data;

        this.curConvSvc.getActualEuroAndUSD();

        //hide after http
        this.spinner.hide();
      },
      error: (err: Error) => console.error(err)
    });

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }



}
