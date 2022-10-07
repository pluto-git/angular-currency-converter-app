import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrConverterComponent } from './curr-converter.component';

describe('CurrConverterComponent', () => {
  let component: CurrConverterComponent;
  let fixture: ComponentFixture<CurrConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrConverterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
