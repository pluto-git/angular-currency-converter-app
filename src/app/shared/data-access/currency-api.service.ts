import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CurrencyRate } from './currency-models';

//let's just do for UAH, USD, EUR
//and not store our api key in envirenment as it is visible anyway.
export const baseUrl = "https://api.apilayer.com/exchangerates_data/latest?symbols=USD%2CEUR&base=UAH";
export const apiKey = "UoDgF7z9zR28LDv8l1DcVBgNBKKwQJ8w"

@Injectable({
  providedIn: 'root'
})
export class CurrencyAPIService {


  constructor(private http: HttpClient) {}

  getLiveCurrencies(): Observable<CurrencyRate> {

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      "apikey": apiKey
    };

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: headerDict
    };

    return this.http.get<CurrencyRate>(baseUrl, requestOptions);
  }
}
