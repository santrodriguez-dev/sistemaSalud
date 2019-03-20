import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMedicalCenterComponent } from './admin-medical-center.component';

describe('AdminMedicalCenterComponent', () => {
  let component: AdminMedicalCenterComponent;
  let fixture: ComponentFixture<AdminMedicalCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMedicalCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMedicalCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
