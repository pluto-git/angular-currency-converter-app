import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footbar',
  templateUrl: './footbar.component.html',
  styleUrls: ['./footbar.component.scss']
})
export class FootbarComponent implements OnInit {

  public footerText = "Awesome Converter, Inc."

  constructor() { }

  ngOnInit(): void {
  }

}
