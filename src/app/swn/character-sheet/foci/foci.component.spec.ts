import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FociComponent } from './foci.component';

describe('FociComponent', () => {
  let component: FociComponent;
  let fixture: ComponentFixture<FociComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FociComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FociComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
