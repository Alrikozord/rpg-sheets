/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CyberwaresComponent } from './cyberwares.component';

describe('CyberwaresComponent', () => {
  let component: CyberwaresComponent;
  let fixture: ComponentFixture<CyberwaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyberwaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberwaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
