import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplyChooserComponent } from './multiply-chooser.component';

describe('MultiplyChooserComponent', () => {
  let component: MultiplyChooserComponent;
  let fixture: ComponentFixture<MultiplyChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplyChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplyChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
