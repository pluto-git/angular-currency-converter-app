import { Component, OnInit} from '@angular/core';
import { CurrencyConverterService } from '../../data-access/currency-converter.service';
import { CurrencyForCard } from '../../data-access/currency-models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent implements OnInit {

  constructor(public curConvSvc: CurrencyConverterService) { }

  ngOnInit(): void {
  };




}


