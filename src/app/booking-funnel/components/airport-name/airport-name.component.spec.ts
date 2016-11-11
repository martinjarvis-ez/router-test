/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AirportNameComponent } from './airport-name.component';

describe('AirportNameComponent', () => {
  let component: AirportNameComponent;
  let fixture: ComponentFixture<AirportNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
