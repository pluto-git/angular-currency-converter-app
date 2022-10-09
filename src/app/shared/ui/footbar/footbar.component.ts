import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
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
