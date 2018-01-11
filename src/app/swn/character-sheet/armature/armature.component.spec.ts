/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArmatureComponent } from './armature.component';

describe('ArmatureComponent', () => {
  let component: ArmatureComponent;
  let fixture: ComponentFixture<ArmatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
