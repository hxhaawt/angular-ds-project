import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankChooseComponent } from './bank-choose.component';

describe('BankChooseComponent', () => {
  let component: BankChooseComponent;
  let fixture: ComponentFixture<BankChooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankChooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
