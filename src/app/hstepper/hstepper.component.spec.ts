import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HstepperComponent } from './hstepper.component';

describe('HstepperComponent', () => {
  let component: HstepperComponent;
  let fixture: ComponentFixture<HstepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HstepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HstepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
