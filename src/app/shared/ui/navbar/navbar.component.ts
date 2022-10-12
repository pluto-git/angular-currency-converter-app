import { Component } from '@angular/core';
import { CurrencyConverterService } from '../../data-access/currency-converter.service';
import { ThemeService, AppThemes } from '../../data-access/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public logoName = "Awesome Converter";
  public appThemes = AppThemes;

  constructor(public curConvSvc: CurrencyConverterService,
    public themeService: ThemeService) { }

  ngOnInit() {
    
  }


}
