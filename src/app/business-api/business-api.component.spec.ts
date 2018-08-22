import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessApiComponent } from './business-api.component';

describe('BusinessApiComponent', () => {
  let component: BusinessApiComponent;
  let fixture: ComponentFixture<BusinessApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
