import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public logoName = "Awesome Converter";
  public topRightText = "Basic Version";

  constructor() { }

}
