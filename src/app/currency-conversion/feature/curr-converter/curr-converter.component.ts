import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CurrencyConverterService } from 'src/app/shared/data-access/currency-converter.service';

export class CurrencyCalculator {
  input!: number;
  inputOption!: string;
  output!: number;
  outputOption!: string;
}

@Component({
  selector: 'app-curr-converter',
  templateUrl: './curr-converter.component.html',
  styleUrls: ['./curr-converter.component.scss']
})
export class CurrConverterComponent implements OnInit {

  public cardHeader = 'Currency Converter';
  public currencyForm!: FormGroup;
  private sub!: Subscription;
  public interval_!: any;
  public previousFormValue?: CurrencyCalculator;

  ourRates!: any;

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

      this.ourRates = {
        base: this.svc.currencyRates.base,
        EUR: this.svc.currencyRates.rates['EUR'],
        USD: this.svc.currencyRates.rates['USD'],
        baseVal: 1
      };
  
      var str = JSON.stringify(this.ourRates);
      str = str.replace(/baseVal/g, this.ourRates.base);
      this.ourRates = JSON.parse(str);

      if (this.previousFormValue!.input !== cForm.input && this.previousFormValue!.output === cForm.output) {
        isLeftFirst = true;
      } else {
        isLeftFirst = false;
      }

      this.previousFormValue = this.calculationLogic(cForm, isLeftFirst);

    });

  }

  calculationLogic(form: CurrencyCalculator, isLeftFirst: boolean = true): CurrencyCalculator | undefined {
    let { input, inputOption, output, outputOption } = form;
    const rates = this.ourRates;
  
    if (rates === undefined) return;

    if ((inputOption in rates) === false || (outputOption in rates) === false) { return; }

    if (isLeftFirst === true) {

      if (inputOption === outputOption) {
        output = input;
      } else {
        let rateA = rates[inputOption];
        let rateB = rates[outputOption];
        output = (input * (rateB / rateA));
        output = Number(output.toFixed(2));
      }
      this.currencyForm.controls['output'].setValue(output, { emitEvent: false });
    }
    //if we type from right
    else if (isLeftFirst === false) {
      if (inputOption === outputOption) {
        input = output;
      }
      else {
        let rateA = rates[inputOption];
        let rateB = rates[outputOption];
        input = (output / (rateB / rateA));
        input = Number(input.toFixed(2));
      }
      this.currencyForm.controls['input'].setValue(input, { emitEvent: false });
    }

    return { input: input, output: output, inputOption: inputOption, outputOption: outputOption };
  }



  onDestroy(): void {
    this.sub.unsubscribe();
  }

}
