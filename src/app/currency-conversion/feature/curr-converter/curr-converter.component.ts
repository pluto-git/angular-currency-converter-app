import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CurrencyConverterService } from 'src/app/shared/data-access/currency-converter.service';
import { Rate } from 'src/app/shared/data-access/currency-models';
import { CurrencyCalculator } from 'src/app/shared/data-access/currency-models';

@Component({
  selector: 'app-curr-converter',
  templateUrl: './curr-converter.component.html',
  styleUrls: ['./curr-converter.component.scss']
})
export class CurrConverterComponent implements OnInit {

  public cardHeader = 'Currency Converter';
  public currencyForm!: FormGroup;
  private sub!: Subscription;
  private previousFormValue?: CurrencyCalculator;

  constructor(private svc: CurrencyConverterService) { }

  ngOnInit() {

    this.currencyForm = new FormGroup({
      input: new FormControl(''),
      inputOption: new FormControl('EUR'),
      output: new FormControl(''),
      outputOption: new FormControl('UAH')
    });

    this.previousFormValue = this.currencyForm.value;

    this.sub = this.currencyForm.valueChanges.subscribe((cForm: CurrencyCalculator) => {
      let isLeftFirst = true;

      const ourRates: Rate = {
        base: this.svc.currencyRates.base,
        EUR: this.svc.currencyRates.rates['EUR'],
        USD: this.svc.currencyRates.rates['USD'],
      };
      ourRates[ourRates.base] = 1;// setting up 'UAH' - 1 basically.

      //check which input is changed first...
      if (this.previousFormValue!.input !== cForm.input && this.previousFormValue!.output === cForm.output) {
        isLeftFirst = true;
      } else {
        isLeftFirst = false;
      }

      this.previousFormValue = this.svc.calculationLogic(cForm, isLeftFirst, ourRates);
      if (this.previousFormValue !== undefined) {
        this.currencyForm.setValue(this.previousFormValue, { emitEvent: false })
      }
    });

  }


  onDestroy(): void {
    this.sub.unsubscribe();
  }

}
