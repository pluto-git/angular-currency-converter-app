import { Injectable } from '@angular/core';
import { CurrencyForCard, CurrencyRate } from './currency-models';
import { Rate } from './currency-models';
import { CurrencyCalculator } from './currency-models';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  public currencyRates!: CurrencyRate;
  public navbarCurrencies!: CurrencyForCard[];

  constructor() { }

  //check if some object is empty. more a helper.
  isEmptyObject(obj: any): boolean {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop))
        return false;
    }
    return true;
  }

  //for our card in the header
  getActualEuroAndUSD(base: string = 'UAH'): void {

    if (this.isEmptyObject(this.currencyRates)) return;

    this.navbarCurrencies = [
      { base: "EUR", value: 1 / this.currencyRates.rates.EUR, regardingCode: base, isFirst: true },
      { base: "USD", value: 1 / this.currencyRates.rates.USD, regardingCode: base, isFirst: false }
    ];

  }


  //for our calculator
  calculationLogic(form: CurrencyCalculator, isLeftFirst: boolean = true, ourRates: Rate): CurrencyCalculator | undefined {
    let { input, inputOption, output, outputOption } = form;
    const rates = ourRates;

    if (rates === undefined) return;

    if ((inputOption in rates) === false || (outputOption in rates) === false) { return; }

    const rateA = rates[inputOption];
    const rateB = rates[outputOption];

    //for clarity make this big chunk of code.
    //if we type from left
    if (isLeftFirst === true) {
      //if left currency equals to the right one:
      if (inputOption === outputOption) {
        output = input;
        //otherwise calculate output
      } else {
        output = (input * (rateB / rateA));
        //cents could play with our accuracy a bit.
        output = Number(output.toFixed(2));
      }
    }

    //if we type from right
    else if (isLeftFirst === false) {

      if (inputOption === outputOption) {
        input = output;
      }
      else {
        input = (output / (rateB / rateA));
        input = Number(input.toFixed(2));
      }

    }

    return { input: input, output: output, inputOption: inputOption, outputOption: outputOption };
  }
}
