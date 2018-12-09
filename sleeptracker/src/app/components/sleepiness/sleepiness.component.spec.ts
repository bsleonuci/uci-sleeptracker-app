import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepinessComponent } from './sleepiness.component';

describe('SleepinessComponent', () => {
  let component: SleepinessComponent;
  let fixture: ComponentFixture<SleepinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
