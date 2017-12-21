/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditToggleListComponent } from './edit-toggle-list.component';

describe('EditToggleListComponent', () => {
  let component: EditToggleListComponent;
  let fixture: ComponentFixture<EditToggleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditToggleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditToggleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
