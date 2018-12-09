import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvernightComponent } from './overnight.component';

describe('OvernightComponent', () => {
  let component: OvernightComponent;
  let fixture: ComponentFixture<OvernightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvernightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvernightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
