/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CyberwareComponent } from './cyberware.component';

describe('CyberwareComponent', () => {
  let component: CyberwareComponent;
  let fixture: ComponentFixture<CyberwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyberwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
