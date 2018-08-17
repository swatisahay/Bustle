import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imageslide1Component } from './imageslide1.component';

describe('Imageslide1Component', () => {
  let component: Imageslide1Component;
  let fixture: ComponentFixture<Imageslide1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imageslide1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imageslide1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
